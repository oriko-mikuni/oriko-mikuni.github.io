import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";

export class Barbarian2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BARBARIAN2,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: []
        });
    }
}
