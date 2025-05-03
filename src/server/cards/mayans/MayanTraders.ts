import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class MayanTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAYAN_TRADERS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY6",
            effectText: [
                "Gain 1{goods} per {city}/{metropolis} you have in play (max 4).",
                "Give each other player a card from your hand or discard pile.",
                "Any player you give a {mask} also takes a {unrest}."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
