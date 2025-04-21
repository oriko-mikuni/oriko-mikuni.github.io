import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class RomanExpansion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMAN_EXPANSION,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM21",
            effectText: [
                "Acquire {region}. You MAY acquire {region} again.",
                "Each other player recalls a {region}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
