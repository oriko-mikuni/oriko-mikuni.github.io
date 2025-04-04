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

export class CityOfGelonus extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_GELONUS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SCY5",
            effectText: cardEffectReuse.city,
            developmentCost: {population: 3},
            victoryPoints: 2,
        });
    }
}
