import {ClientCard} from "../../../common/cards/ClientCard.ts";

type CardporiumDisplayStateAction = {
    targetIncludeHorizonsState?: boolean,
};

type CardporiumDisplayStateProps = {
    cards?: Array<ClientCard>;
    update?: (arg0: ClientCard) => ClientCard;
}

export class CardporiumDisplayState {
    cards: Array<ClientCard>;
    updatedCards: Array<ClientCard>;
    update?: (arg0: ClientCard) => ClientCard;
    includeHorizonsState: boolean;

    constructor(props: CardporiumDisplayStateProps) {
        this.cards = props.cards || [];
        this.update = props.update;
        this.updatedCards = this.cards.map(card => this.update !== undefined ? this.update(card) : card);
        this.includeHorizonsState = false;
    }

    public getCards(): Array<ClientCard> {
        return this.includeHorizonsState ? this.updatedCards : this.cards;
    }

    public static toggleIncludeHorizons(targetIncludeHorizonsState: boolean): Partial<CardporiumDisplayStateAction> {
        return {targetIncludeHorizonsState: targetIncludeHorizonsState};
    }

    public static reducer(
        state: CardporiumDisplayState,
        action: CardporiumDisplayStateAction
    ): CardporiumDisplayState {
        const resultState: CardporiumDisplayState = new CardporiumDisplayState({});
        resultState.cards = state.cards;
        resultState.updatedCards = state.updatedCards;
        resultState.update = state.update;
        resultState.includeHorizonsState = state.includeHorizonsState;

        if (action.targetIncludeHorizonsState !== undefined) {
            resultState.includeHorizonsState = action.targetIncludeHorizonsState;
        }
        return resultState;
    }
}
