import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Fireworks extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FIREWORKS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN8",
            effectText: [
                "Free play. Draw a card and discard a card. You MAY put a card from your discard pile into your history."
            ],
            developmentCost: {material: 2, population: 1},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
