import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class RomeTheEternalCity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROME_THE_ETERNAL_CITY,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ROM7",
            effectText: "Only playable if [City of Rome] is in play.\n" +
                "Put [City of Rome] into your history.\n" +
                cardEffectReuse.metropolis,
            developmentCost: "{material}x3 {population}x3",
            victoryPoints: 4,
        });
    }
}
