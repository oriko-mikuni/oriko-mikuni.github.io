import React, {useReducer} from "react";
import {allCards, allVictoryPoints} from '../cards/ClientCardsManifest.ts';
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import pageTitle from "./PageTitle.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon.ts";
import CardTypeIconDisplay from "./card/CardTypeIconDisplay.tsx";
import {CardporiumDisplayState} from "./cardporiumState/GroupingDisplayState.tsx";
import {
    CardporiumFilter
} from "./cardporiumState/ElementFilterState.tsx";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon.ts";
import CardHeaderIconDisplay from "./card/CardHeaderIconDisplay.tsx";
import {CardStateSymbol} from "../../common/cards/CardStateSymbol.ts";
import CardStateSymbolDisplay from "./card/CardStateSymbolDisplay.tsx";
import {TextFilter, TextTranslationGroup} from "./cardporiumState/TextFilterState.tsx";
import {ClientCard} from "../../common/cards/ClientCard.ts";
import {useTranslation} from "react-i18next";
import CardVictoryPointIcon from "./card/CardVictoryPointIcon.tsx";

function ImperiumCardporium(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const displaySetting: CardporiumDisplayState = new CardporiumDisplayState(allCards());
    const [state, dispatch] = useReducer(CardporiumDisplayState.reducer, displaySetting);
    const suitFilter = new CardporiumFilter(Object.values(CardSuitIcon));
    const typeFilter = new CardporiumFilter(Object.values(CardTypeIcon));
    const headerFilter = new CardporiumFilter(Object.values(CardHeaderIcon));
    const stateFilter = new CardporiumFilter(Object.values(CardStateSymbol));
    const victoryFilter = new CardporiumFilter(allVictoryPoints());
    const textFilter = new TextFilter();

    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCardporium"});
    const {t: nameTranslation} = useTranslation("cardName");
    const {t: effectTranslation} = useTranslation("cardEffect");
    const {t: victoryTranslation} = useTranslation("victoryText");
    const translation: TextTranslationGroup = {
        nameTranslation,
        effectTranslation,
        victoryTranslation
    };

    const filters: Array<(cards: Array<ClientCard>) => Array<ClientCard>> = [
        cards => suitFilter.state.filterAnyProps(cards, card => card.suit),
        cards => typeFilter.state.filterAnyProps(cards, card => card.typeIcon),
        cards => stateFilter.state.filterAnyProps(cards, card => card.stateSymbol),
        cards => headerFilter.state.filterOneProp(cards, card => card.headerIcon),
        cards => victoryFilter.state.filterOneProp(cards, card => card.victoryPoints === undefined ? undefined : card.victoryPoints.toString())
    ]

    const cardModuleElements: Array<{elem: React.JSX.Element, visibleNum: number}> = [];
    for (const groupState of state.groupDisplays.values()) {
        cardModuleElements.push(
            {
                elem:
                    <CardGroup
                        groupState={groupState}
                        iconFilters={filters}
                        textFilter={(cards) => textFilter.state.filterText(cards, translation)}
                        onToggleOn={() => dispatch(CardporiumDisplayState.toggle(true, groupState.groupName))}
                        onToggleOff={() => dispatch(CardporiumDisplayState.toggle(false, groupState.groupName))}
                        key={groupState.groupName}
                    />,
                visibleNum: textFilter.state.filterText(groupState.cards, translation).length
            }
        )
    }
    cardModuleElements.sort((a, b) =>
        a.visibleNum > 0 && b.visibleNum > 0 ? 0 : b.visibleNum - a.visibleNum);

    const suitFilterButtons: Array<React.JSX.Element> =
        suitFilter.filterButtons(({elem}: {elem?: string}) => {
            const suit: CardSuitIcon | undefined = Object.values(CardSuitIcon).find(value => value === elem);
            return suit === undefined ? <CardSuitIconDisplay/> : <CardSuitIconDisplay suit={suit}/>;
        });
    const typeIconFilterButtons: Array<React.JSX.Element> =
        typeFilter.filterButtons(({elem}: {elem?: string}) => {
            const typeIcon: CardTypeIcon | undefined = Object.values(CardTypeIcon).find(value => value === elem);
            return typeIcon === undefined ? <CardTypeIconDisplay/> : <CardTypeIconDisplay type={typeIcon}/>;
        });
    const headerIconFilterButtons: Array<React.JSX.Element> =
        headerFilter.filterButtons(({elem}: {elem?: string}) => {
            const headerIcon: CardHeaderIcon | undefined = Object.values(CardHeaderIcon).find(value => value === elem);
            return headerIcon === undefined ? <CardHeaderIconDisplay/> : <CardHeaderIconDisplay headerIcon={headerIcon}/>
        });
    const stateSymbolFilterButtons: Array<React.JSX.Element> =
        stateFilter.filterButtons(({elem}: {elem?: string}) => {
            const stateSymbol: CardStateSymbol | undefined = Object.values(CardStateSymbol).find(value => value === elem);
            return stateSymbol === undefined ? <CardStateSymbolDisplay/> : <CardStateSymbolDisplay state={stateSymbol}/>
        });
    const victoryPointFilterButtons: Array<React.JSX.Element> =
        victoryFilter.filterButtons(({elem}: {elem?: string}) => {
            if (elem === undefined) return <CardVictoryPointIcon/>;
            if (elem === 'conditional') return <CardVictoryPointIcon victoryPoints={elem}/>;
            if (elem === 'variable') return <CardVictoryPointIcon victoryPoints={elem}/>;
            if (elem === 'negativeConditional') return <CardVictoryPointIcon victoryPoints={elem}/>;
            const maybeNumber: number = Number.parseInt(elem);
            if (Number.isNaN(maybeNumber)) return <CardVictoryPointIcon/>;
            return <CardVictoryPointIcon victoryPoints={maybeNumber}/>;
        })

    return <span>
        <button onClick={() => navigate("/")}>{uiTranslation("backToHomepage")}</button> <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'>{uiTranslation("toFeedback")}</a>
        <h1 className="centerAlign">{uiTranslation("cardporiumHeader")}</h1>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("Suit")}: {suitFilterButtons}</h2>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("TypeIcon")}: {typeIconFilterButtons}</h2>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("HeaderIcon")}: {headerIconFilterButtons}</h2>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("StateIcon")}: {stateSymbolFilterButtons}</h2>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("VictoryPoint")}: {victoryPointFilterButtons}</h2>
        <h2 className="centerAlign">{uiTranslation("filter") + " " + uiTranslation("text")}: {textFilter.filterComponent(uiTranslation)}</h2>
        <h2 style={{textAlign: "left"}}>
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(false))}>{uiTranslation("collapse all")}</button>
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(true))}>{uiTranslation("expand all")}</button>
        </h2>
        {cardModuleElements.map(elem => elem.elem)}
        <h2 style={{textAlign: "left"}}>
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(false))}>{uiTranslation("collapse all")}</button>
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(true))}>{uiTranslation("expand all")}</button>
        </h2>
    </span>;
}

export default ImperiumCardporium;
