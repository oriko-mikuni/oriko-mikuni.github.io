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

export class AlexandriaInEgypt extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALEXANDRIA_IN_EGYPT,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC8",
            effectText: cardEffectReuse.metropolis,
            developmentCost: "{material}x4 {population}x1",
            victoryPoints: 2,
        });
    }
}
