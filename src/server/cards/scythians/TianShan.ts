import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class TianShan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TIAN_SHAN,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SCY19",
            effectText: "Gain 1{population}. You MAY garrison a card.",
        });
    }
}
