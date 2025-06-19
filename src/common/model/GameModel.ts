import {CardModel} from "./CardModel";

export interface GameModel {
    marketSlot1: CardModel | undefined;
    marketSlot2: CardModel | undefined;
    marketSlot3: CardModel | undefined;
    marketSlot4: CardModel | undefined;
    marketSlot5: CardModel | undefined;

    mainDeckNbr: number;
    regionDeckNbr: number;
    uncivilisedDeckNbr: number;
    civilisedDeckNbr: number;
    troUnderRegionDeck: CardModel | undefined;
    troUnderUncivilisedDeck: CardModel | undefined;
    troUnderCivilisedDeck: CardModel | undefined;

    fameDeckNbr: number;
    kingOfKings: CardModel | undefined;
    unrestPile: Array<CardModel>;
    chaosPile: Array<CardModel>;
    exileArea: Array<CardModel>;
    exileAreaNbr?: number;

    isGameEndTriggered: boolean;
}
