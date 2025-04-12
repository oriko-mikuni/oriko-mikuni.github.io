import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";

export class Empire3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPIRE3,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: []
        });
    }
}
