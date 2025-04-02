import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class MilitaryEngineering extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MILITARY_ENGINEERING,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM3",
            effectText: "Each other player discards 2 cards.\n" +
                "You MAY break through for {civilised}.",
            developmentCost: "{material}x4 {population}x1",
            victoryPoints: 3,
        });
    }
}
