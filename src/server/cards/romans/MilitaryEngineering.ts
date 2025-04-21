import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class MilitaryEngineering extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MILITARY_ENGINEERING,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM3",
            effectText: [
                "Each other player discards 2 cards.",
                "You MAY break through for {civilised}."
            ],
            developmentCost: {material: 4, population: 1},
            victoryPoints: 3,
        });
    }
}
