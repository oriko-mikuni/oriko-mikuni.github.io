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

export class EasternZhou extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EASTERN_ZHOU,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN11",
            effectText: [
                "Gain 1{population}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
