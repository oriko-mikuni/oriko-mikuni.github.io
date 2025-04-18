import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class City2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_C2,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC17",
            effectText: [
                CardEffectReuse.city
            ],
            victoryPoints: 1,
        });
    }
}
