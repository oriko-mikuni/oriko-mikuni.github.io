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
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Themiscyra extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THEMISCYRA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.FERTILE, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL11",
            effectText: "Gain 1{progress}. Exile a card from the market. " +
                cardEffectReuse.garrisonACard,
            developmentCost: {population: 2},
        });
    }
}
