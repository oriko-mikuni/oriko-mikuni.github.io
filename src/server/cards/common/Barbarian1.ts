import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Barbarian1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BARBARIAN1,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: []
        });
    }
}
