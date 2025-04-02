import {Card} from "./cards/Card";
import {CardSuitIcon} from "../common/cards/CardSuitIcon";

export class Player {
    material: number = 0;
    population: number = 0;
    progress: number = 0;
    goods: number = 0;

    public allOpponents(): Array<Player> {
        return [];
    }
    public allCards(): Array<Card> {
        return [];
    }

    public cardCount(cond?: (card: Card) => boolean): number {
        if (cond === undefined) {
            return this.allCards().length;
        }
        return this.allCards().filter(card => cond(card)).length;
    }

    public suitCount(suit: CardSuitIcon, cond?: (card: Card) => boolean): number {
        let returnValue: number = 0;
        if (cond === undefined) {
            this.allCards().forEach(card =>
                returnValue += card.suit.filter(suit1 => suit1 === suit).length
            );
        } else {
            this.allCards().filter(card => cond(card)).forEach(card =>
                returnValue += card.suit.filter(suit1 => suit1 === suit).length
            );
        }
        return returnValue;
    }
}
