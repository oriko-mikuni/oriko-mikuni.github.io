import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class OlmecTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLMEC_TRADERS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM5",
            effectText: [
                "Gain 3{material}.",
                "Give each other player a card from your hand or discard pile.",
                "Any player you give a {mask} also takes {unrest}."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
