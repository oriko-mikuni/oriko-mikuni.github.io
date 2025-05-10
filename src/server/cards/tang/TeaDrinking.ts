import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TeaDrinking extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TEA_DRINKING,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN5",
            effectText: [
                "Draw a card, gain 1{progress} and return a {exhaust} to your state card."
            ],
            developmentCost: {material: 3, population: 1},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
