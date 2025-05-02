import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TeaCeremony extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TEA_CEREMONY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN5",
            effectText: [
                "Draw a card, gain 1{goods} and return a {exhaust} to your state card."
            ],
            developmentCost: {material: 3, population: 1},
            victoryPoints: 2,
        });
    }
}
