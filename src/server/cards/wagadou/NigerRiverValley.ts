import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class NigerRiverValley extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NIGER_RIVER_VALLEY,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG11",
            effectText: [
                "Choose: put a card from your hand or discard pile into your history OR discard a card to gain 1{progress}.",
                CardEffectReuse.garrisonACard
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
