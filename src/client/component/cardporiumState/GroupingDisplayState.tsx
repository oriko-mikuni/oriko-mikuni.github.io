import {ClientCard} from "../../../common/cards/ClientCard.ts";

type CardporiumDisplayStateAction = {
    targetIncludeHorizonsState?: boolean,
    targetDetailedCard?: ClientCard
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
    detailedCard: ClientCard | undefined;

    constructor(props: CardporiumDisplayStateProps) {
        this.cards = props.cards || [];
        this.update = props.update;
        this.updatedCards = this.cards.map(card => this.update !== undefined ? this.update(card) : card);
        this.includeHorizonsState = false;
        this.detailedCard = undefined;
    }

    public getCards(): Array<ClientCard> {
        return this.includeHorizonsState ? this.updatedCards : this.cards;
    }

    public static toggleIncludeHorizons(targetIncludeHorizonsState: boolean): Partial<CardporiumDisplayStateAction> {
        return {targetIncludeHorizonsState: targetIncludeHorizonsState};
    }

    public static toggleDetailedCard(targetDetailedCard?: ClientCard): Partial<CardporiumDisplayStateAction> {
        return {targetDetailedCard: targetDetailedCard};
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
        } else if (action.targetDetailedCard !== undefined) {
            resultState.detailedCard = action.targetDetailedCard;
        }
        return resultState;
    }
}
