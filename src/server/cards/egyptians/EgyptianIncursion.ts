import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class EgyptianIncursion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIAN_INCURSION,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY18",
            effectText: [
                "Pay 1{population} and 2{material} to acquire {region}/{tributary}.",
                "Each other player recalls a {region}."
            ],
        });
    }
}
