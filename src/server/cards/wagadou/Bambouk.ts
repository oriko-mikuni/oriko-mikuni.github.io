import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Bambouk extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BAMBOUK,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG12",
            effectText: [
                "Choose: exile a card from the market OR discard a card to gain 1{goods}.",
                CardEffectReuse.garrisonACard
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
