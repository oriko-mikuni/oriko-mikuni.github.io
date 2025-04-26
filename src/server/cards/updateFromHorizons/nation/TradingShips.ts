import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class TradingShips extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRADING_SHIPS_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR7X",
            effectText: [
                "Exhaust: recall a {river}/{fertile}/{ocean} to choose: acquire a card in the market with {material} on it OR trade."
            ],
            developmentCost: {material: 4, population: 1},
            victoryPoints: 4,
            gameModule: GameModule.CARTHAGINIANS
        });
    }
}
