import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";

export class Empire1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPIRE1,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: []
        });
    }
}
