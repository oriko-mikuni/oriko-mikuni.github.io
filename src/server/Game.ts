import {Player} from "./Player";
import {ICard} from "./cards/ICard";
import {CardSuitIcon} from "../common/cards/CardSuitIcon";

export class Game {
    playerCount: number = 0;
    players: Array<Player> = [];

    marketSlot1?: ICard;
    marketSlot2?: ICard;
    marketSlot3?: ICard;
    marketSlot4?: ICard;
    marketSlot5?: ICard;

    mainDeck: Array<ICard> = [];
    smallDeck: Array<{suit: CardSuitIcon, cards: Array<ICard>}> = [];
    troUnderSmallDeck: Array<{suit: CardSuitIcon, card: ICard}> = [];

    fameDeck: Array<ICard> = [];
    kingOfKings?: ICard;
    unrestPile: Array<ICard> = [];
    chaosPile: Array<ICard> = [];
    exileArea: Array<ICard> = [];

    constructor(playerCount: number) {
        this.playerCount = playerCount;
        for (let i = 1; i <= playerCount; i++) {
            const ithPlayer: Player = new Player(i.toString(), this);
            this.players.push(ithPlayer);
        }
    }

    public get exileSize(): number {
        return this.exileArea.length;
    }
}
