import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class TradingShips extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRADING_SHIPS,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR7",
            effectText: [
                "Exhaust: you MAY recall a {river} or a {fertile} to acquire a card in the market that has {material} on it."
            ],
            developmentCost: {material: 4, population: 1},
            victoryPoints: 4,
        });
    }
}
