import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class StoneHeads extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STONE_HEADS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM7",
            effectText: "Passive: when a card effect requires\n" +
                "you to discard {mask}, you MAY instead\n" +
                "abandon cards garrisoned here.\n" +
                "Solstice: you MAY garrison a card here.",
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
