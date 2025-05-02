import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Barbarian3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BARBARIAN3,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            cardInPlayType: CardInPlayType.STATE
        });
    }
}
