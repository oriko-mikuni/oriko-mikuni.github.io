import {ClientCard} from "../../../common/cards/ClientCard.ts";

type CardporiumDisplayStateAction = {
    targetUpdateState?: boolean,
};

export class CardporiumDisplayState {
    cards: Array<ClientCard>;
    updatedCards: Array<ClientCard>;
    update?: (arg0: ClientCard) => ClientCard;
    updateState: boolean;

    constructor(cards: Array<ClientCard> = [], update: ((arg0: ClientCard) => ClientCard) | undefined = undefined) {
        this.cards = cards;
        this.update = update;
        this.updatedCards = cards.map(card => update !== undefined ? update(card) : card)
        this.updateState = false;
    }

    public getCards(): Array<ClientCard> {
        return this.updateState ? this.updatedCards : this.cards;
    }

    public static toggleUpdate(targetUpdateState: boolean) {
        return {targetUpdateState: targetUpdateState};
    }

    public static reducer(
        state: CardporiumDisplayState,
        action: CardporiumDisplayStateAction
    ): CardporiumDisplayState {
        const resultState: CardporiumDisplayState = new CardporiumDisplayState();
        resultState.cards = state.cards;
        resultState.updatedCards = state.updatedCards;
        resultState.update = state.update;
        resultState.updateState = state.updateState;

        if (action.targetUpdateState !== undefined) {
            resultState.updateState = action.targetUpdateState;
        }
        return resultState;
    }
}
