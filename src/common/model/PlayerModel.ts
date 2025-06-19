import {GameModel} from "./GameModel";
import {CardModel} from "./CardModel";

export interface ViewModel {
    game: GameModel;
    players: Array<PublicPlayerModel>;
    id?: string;
    thisPlayer: PublicPlayerModel | undefined;
}

export interface PublicPlayerModel {
    id: string;
    name: string;

    // resource
    material: number;
    population: number;
    progress: number;
    goods: number;
    action: number;
    exhaust: number;

    // cards not yet belong to player
    nationDeckExhausted: boolean;
    developmentAreaExhausted: boolean;
    nationDeckCardNbr: number;
    accessionCard: CardModel | undefined;
    developmentAreaCards: Array<CardModel>;

    // tableau cards
    nationPower: CardModel | undefined;
    stateCard: CardModel | undefined;
    inPlayCards: Array<CardModel>;

    // hand, draw, discard
    drawDeckCardNbr: number;
    handCardNbr: number;
    discardPileCards: Array<CardModel>;

    // out of play area, other player cannot see them.
    historyCardNbr: number;
    sunkenCardNbr: number;
    legendsCardNbr: number;
}

export interface PlayerViewModel {
    id: string;
    thisPlayer: PublicPlayerModel;

    nationDeckCardsSorted: Array<CardModel>;
    drawDeckCardsSorted: Array<CardModel>;
    handCards: Array<CardModel>;
    historyCards: Array<CardModel>;
    sunkenCards: Array<CardModel>;
    legendsCards: Array<CardModel>;
}
