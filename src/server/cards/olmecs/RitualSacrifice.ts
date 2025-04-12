import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class RitualSacrifice extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RITUAL_SACRIFICE,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM4",
            effectText: cardEffectReuse.unplayableUnless + "[Step Pyramids]\n" +
                "is in play. Discard 2 {mask} and pay 2 {population}\n" +
                "to look at the top 3 cards of {fame} deck.\n" +
                "Take one of those cards.",
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
