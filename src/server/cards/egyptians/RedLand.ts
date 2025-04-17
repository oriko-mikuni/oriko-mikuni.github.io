import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class RedLand extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RED_LAND,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "EGY11",
            effectText: [
                "Gain 1{progress}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
