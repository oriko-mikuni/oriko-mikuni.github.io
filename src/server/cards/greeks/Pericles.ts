import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Pericles extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERICLES,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE4",
            effectText: [
                "Free play. Acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
        });
    }
}
