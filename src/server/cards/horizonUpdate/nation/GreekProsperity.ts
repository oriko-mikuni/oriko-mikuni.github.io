import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {GameModule} from "../../../../common/cards/GameModule";

export class GreekProsperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEK_PROSPERITY_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE3X",
            effectText: [
                "Choose: gain 1{material} per {production}/{merchant} OR gain 1{population} per {region}/{trade-route} OR draw a card per {city}/{metropolis} you have in play."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 2,
            gameModule: GameModule.GREEKS
        });
    }
}
