import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Development extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DEVELOPMENT_PER,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER4",
            effectText: cardEffectReuse.development,
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
