import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";

export class Barbarian0 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BARBARIAN0,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: []
        });
    }
}
