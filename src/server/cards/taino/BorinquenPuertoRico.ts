import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class BorinquenPuertoRico extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BORINQUEN_PUERTO_RICO,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI4",
            effectText: [
                "Gain 2{population}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
            developmentCost: {material: 5},
            victoryPoints: 2,
        });
    }
}
