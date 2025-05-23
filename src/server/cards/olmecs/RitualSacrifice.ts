import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {KeywordNames} from "../../../common/keywords";

export class RitualSacrifice extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RITUAL_SACRIFICE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM4",
            effectText: [
                "Cannot be played unless [Step Pyramids] is in play.",
                "Discard 2 {mask} and pay 2{population} to look at the top 3 cards of {fame} deck.",
                "Take one of those cards."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
            keywords: [
                KeywordNames.look
            ],
            relatedCards: [
                CardName.STEP_PYRAMIDS
            ]
        });
    }
}
