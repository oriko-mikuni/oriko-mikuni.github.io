import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Confucianism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONFUCIANISM_TAN,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN6",
            effectText: [
                "Exhaust: spend 1 action and discard 2 cards to choose: acquire a {tributary}/{uncivilised}/{civilised} with {population} on it OR return up to 2 {unrest} from your discard pile."
            ],
            developmentCost: {population: 4},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
