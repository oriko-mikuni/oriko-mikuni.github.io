import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class RomanExpansion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMAN_EXPANSION,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM21",
            effectText: "Acquire {region}. You MAY acquire {region} again.\n" +
                "Each other player recalls a {region}.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
