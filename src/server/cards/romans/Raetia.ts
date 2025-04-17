import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Raetia extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RAETIA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ROM12",
            effectText: [
                "Gain 1{material}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
