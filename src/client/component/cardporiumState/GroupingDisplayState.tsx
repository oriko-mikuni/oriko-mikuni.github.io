import {ClientCard} from "../../../common/cards/ClientCard.ts";

export class CardGroupDisplayState {
    cards: Array<ClientCard>;
    display: boolean;
    groupName: string;
    constructor(groupName: string) {
        this.cards = [];
        this.display = false;
        this.groupName = groupName;
    }
}

type CardporiumDisplayStateAction = {
    groupName?: string,
    targetDisplayState: boolean,
};

export class CardporiumDisplayState {
    groupDisplays: Map<string, CardGroupDisplayState>;
    cards: Array<ClientCard>;

    constructor(cards: Array<ClientCard> = []) {
        this.cards = cards;
        this.groupDisplays = new Map<string, CardGroupDisplayState>();
        this.initDisplaySetting();
    }

    public initDisplaySetting(): void {
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

    public static toggle(targetDisplayState: boolean, groupName?: string) {
        return {groupName: groupName, targetDisplayState: targetDisplayState};
    }

    public static reducer(
        state: CardporiumDisplayState,
        action: CardporiumDisplayStateAction
    ): CardporiumDisplayState {
        const resultState: CardporiumDisplayState = new CardporiumDisplayState();
        resultState.cards = state.cards;
        resultState.groupDisplays = state.groupDisplays;

        if (action.groupName !== undefined) {
            const groupDisplay: CardGroupDisplayState | undefined = resultState.groupDisplays.get(action.groupName);
            if (groupDisplay !== undefined) {
                groupDisplay.display = action.targetDisplayState;
            }
        } else {
            resultState.groupDisplays.forEach(groupDisplay =>
                groupDisplay.display = action.targetDisplayState
            );
        }
        return resultState;
    }

}
