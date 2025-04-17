import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class MountainOfAtlantis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOUNTAIN_OF_ATLANTIS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL10",
            effectText: [
                "Gain 1{progress}.",
                cardEffectReuse.garrisonACard
            ],
            developmentCost: {population: 2},
        });
    }
}
