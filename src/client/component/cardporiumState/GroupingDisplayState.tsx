import {CardName} from "../../../common/cards/CardName.ts";

type CardporiumDisplayStateAction = {
    targetIncludeHorizonsState: boolean,
    targetMinimizeCards: boolean
};

type CardporiumDisplayStateProps = {
    cards?: Array<CardName>;
    update?: (arg0: CardName) => CardName;
}

export class CardporiumDisplayState {
    cards: Array<CardName>;
    updatedCards: Array<CardName>;
    update?: (arg0: CardName) => CardName;
    includeHorizonsState: boolean;
    minimizeCard: boolean;

    constructor(props: CardporiumDisplayStateProps) {
        this.cards = props.cards || [];
        this.update = props.update;
        this.updatedCards = this.cards.map(card => this.update !== undefined ? this.update(card) : card);
        this.includeHorizonsState = false;
        this.minimizeCard = false;
    }

    public getCards(): Array<CardName> {
        return this.includeHorizonsState ? this.updatedCards : this.cards;
    }

    public static toggleIncludeHorizons(targetIncludeHorizonsState: boolean): Partial<CardporiumDisplayStateAction> {
        return {targetIncludeHorizonsState: targetIncludeHorizonsState};
    }

    public static toggleMinimizeCards(targetMinimizeCard?: boolean): Partial<CardporiumDisplayStateAction> {
        return {targetMinimizeCards: targetMinimizeCard};
    }

    public static reducer(
        state: CardporiumDisplayState,
        action: Partial<CardporiumDisplayStateAction>
    ): CardporiumDisplayState {
        const resultState: CardporiumDisplayState = new CardporiumDisplayState({});
        resultState.cards = state.cards;
        resultState.updatedCards = state.updatedCards;
        resultState.update = state.update;
        resultState.minimizeCard = state.minimizeCard;
        resultState.includeHorizonsState = state.includeHorizonsState;

        if (action.targetIncludeHorizonsState !== undefined) {
            resultState.includeHorizonsState = action.targetIncludeHorizonsState;
        } else if (action.targetMinimizeCards !== undefined) {
            resultState.minimizeCard = action.targetMinimizeCards;
        }
        return resultState;
    }
}
