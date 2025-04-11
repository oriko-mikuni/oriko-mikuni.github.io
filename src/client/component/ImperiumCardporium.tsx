import React, {useReducer} from "react";
import {allCards} from '../cards/ClientCardsManifest.ts';
import {ClientCard} from "../../common/cards/ClientCard.ts";
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import pageTitle from "./PageTitle.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
class CardGroupDisplayState {
    cards: Array<ClientCard>;
    display: boolean;
    groupName: string;
    constructor(groupName: string) {
        this.cards = [];
        this.display = false;
        this.groupName = groupName;
    }
}

class CardporiumDisplayState {
    groupDisplays: Map<string, CardGroupDisplayState>;
    cards: Array<ClientCard>;
    displayGrouping: 'gameModule';
    filterSuitDisplay: Set<CardSuitIcon>;
    filterUnsuitedDisplay: boolean;

    constructor(cards: Array<ClientCard> = []) {
        this.cards = cards;
        this.displayGrouping = 'gameModule';
        this.groupDisplays = new Map<string, CardGroupDisplayState>();
        this.filterSuitDisplay = new Set<CardSuitIcon>();
        this.filterUnsuitedDisplay = false;
        this.initDisplaySetting();
    }

    public initDisplaySetting(): void {
        if (this.displayGrouping === 'gameModule') {
            this.groupDisplays.clear();
            for (const card of this.cards) {
                const groupName: string = card.gameModule;
                let groupDisplay: CardGroupDisplayState | undefined = this.groupDisplays.get(groupName);
                if (groupDisplay === undefined) {
                    groupDisplay = new CardGroupDisplayState(groupName);
                    this.groupDisplays.set(groupName, groupDisplay);
                }
                groupDisplay.cards.push(card);
            }
        }
    }
}

enum CardporiumDisplayStateActionType {
    TOGGLE_ONE_GROUP = 0,
    TOGGLE_ALL_GROUP = 1,
    TOGGLE_ONE_SUIT = 2
}

type CardporiumDisplayStateAction = {
    type: CardporiumDisplayStateActionType,
    groupName?: string,
    suitIcon?: CardSuitIcon,
    targetDisplayState: boolean,
};

function cardporiumDisplayStateReducer(state: CardporiumDisplayState, action: CardporiumDisplayStateAction): CardporiumDisplayState {
    const resultState: CardporiumDisplayState = new CardporiumDisplayState();
    resultState.cards = state.cards;
    resultState.displayGrouping = state.displayGrouping;
    resultState.groupDisplays = state.groupDisplays;
    state.filterSuitDisplay.forEach((suit: CardSuitIcon) => resultState.filterSuitDisplay.add(suit));
    resultState.filterUnsuitedDisplay = state.filterUnsuitedDisplay;

    switch (action.type) {
        case CardporiumDisplayStateActionType.TOGGLE_ONE_GROUP: {
            if (action.groupName !== undefined) {
                const groupDisplay: CardGroupDisplayState | undefined = resultState.groupDisplays.get(action.groupName);
                if (groupDisplay !== undefined) {
                    groupDisplay.display = action.targetDisplayState;
                }
            }
            break;
        }
        case CardporiumDisplayStateActionType.TOGGLE_ALL_GROUP: {
            const targetDisplayState: boolean = action.targetDisplayState;
            resultState.groupDisplays.forEach(groupDisplay =>
                groupDisplay.display = targetDisplayState
            );
            break;
        }
        case CardporiumDisplayStateActionType.TOGGLE_ONE_SUIT: {
            if (action.suitIcon !== undefined) {
                const suitIcon: CardSuitIcon = action.suitIcon;
                if (action.targetDisplayState && !resultState.filterSuitDisplay.has(suitIcon)) {
                    resultState.filterSuitDisplay.add(suitIcon);
                }
                if (!action.targetDisplayState && resultState.filterSuitDisplay.has(suitIcon)) {
                    resultState.filterSuitDisplay.delete(suitIcon);
                }
            } else {
                resultState.filterUnsuitedDisplay = action.targetDisplayState;
            }
            break;
        }
    }
    return resultState;
}

function ImperiumCardporium(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const cardporiumDisplaySetting: CardporiumDisplayState = new CardporiumDisplayState(allCards());
    const [state, dispatch] = useReducer(cardporiumDisplayStateReducer, cardporiumDisplaySetting);

    const cardModuleElements: Array<React.JSX.Element> = [];
    for (const groupState of state.groupDisplays.values()) {
        cardModuleElements.push(
            <CardGroup
                groupName={groupState.groupName}
                cards={groupState.cards.filter(card => {
                    let result: boolean = true;
                    if (state.filterUnsuitedDisplay || state.filterSuitDisplay.size > 0) {
                        if (card.suit.length === 0 && !state.filterUnsuitedDisplay)
                            result = false;
                        if (card.suit.length > 0 && !state.filterSuitDisplay.has(card.suit[0]))
                            result = false;
                    }
                    return result;
                })}
                display={groupState.display}
                onToggleOn={() => dispatch({
                    type: CardporiumDisplayStateActionType.TOGGLE_ONE_GROUP,
                    groupName: groupState.groupName,
                    targetDisplayState: true
                })}
                onToggleOff={() => dispatch({
                    type: CardporiumDisplayStateActionType.TOGGLE_ONE_GROUP,
                    groupName: groupState.groupName,
                    targetDisplayState: false
                })}
                key={groupState.groupName}
            />
        )
    }

    const suitFilterButtons: Array<React.JSX.Element> = [
        <button onClick={() => dispatch({
            type: CardporiumDisplayStateActionType.TOGGLE_ONE_SUIT,
            suitIcon: undefined,
            targetDisplayState: !state.filterUnsuitedDisplay
        })} style={{background: state.filterUnsuitedDisplay ? "#005500" : "white"}}
        >
            <CardSuitIconDisplay />
        </button>
    ];
    Object.values(CardSuitIcon).forEach((suitIcon: CardSuitIcon) => suitFilterButtons.push(
        <button onClick={() => dispatch({
            type: CardporiumDisplayStateActionType.TOGGLE_ONE_SUIT,
            suitIcon: suitIcon,
            targetDisplayState: !state.filterSuitDisplay.has(suitIcon)
        })} style={{background: state.filterSuitDisplay.has(suitIcon) ? "#005500" : "white"}}
        >
            <CardSuitIconDisplay suit={suitIcon}/>
        </button>
    ));

    return <span>
        <button onClick={() => navigate("/")}>&lt;-- back</button> <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
        <h1 className="centerAlign">Imperium Cardporium</h1>
        <h2 className="centerAlign">
            Toggle:
            <button onClick={() => dispatch({
                type: CardporiumDisplayStateActionType.TOGGLE_ALL_GROUP,
                targetDisplayState: false
            })}>
                collapse all
            </button>
            <button onClick={() => dispatch({
                type: CardporiumDisplayStateActionType.TOGGLE_ALL_GROUP,
                targetDisplayState: true
            })}>
                expand all
            </button>
        </h2>
        <h2 className="centerAlign">
            Filter Suits:
            {suitFilterButtons}
        </h2>
        {cardModuleElements}
    </span>;
}

export default ImperiumCardporium;
