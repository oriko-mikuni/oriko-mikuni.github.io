import {Player} from "./Player";
import {ICard} from "./cards/ICard";
import {CardSuitIcon} from "../common/cards/CardSuitIcon";

export class Game {
    playerCount: number = 0;
    players: Array<Player> = [];

    marketSlots: Array<{card: ICard, unrest: ICard}> = [];
    mainDeck: Array<ICard> = [];
    smallDeck: Array<{suit: CardSuitIcon, cards: Array<ICard>}> = [];
    fameDeck: Array<ICard> = [];
    unrestPile: Array<ICard> = [];
    exileArea: Array<ICard> = [];

    constructor(playerCount: number) {
        this.playerCount = playerCount;
        for (let i = 1; i <= playerCount; i++) {
            const ithPlayer: Player = new Player(i.toString(), this);
            this.players.push(ithPlayer);
        }
    }
}
