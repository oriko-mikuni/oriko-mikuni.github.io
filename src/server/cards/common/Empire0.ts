import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Empire0 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPIRE0,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardInPlayType: CardInPlayType.STATE
        });
    }
}
