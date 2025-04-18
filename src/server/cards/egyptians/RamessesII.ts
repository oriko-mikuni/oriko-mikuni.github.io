import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class RamessesII extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RAMESSES_II,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY6",
            effectText: [
                "Free play. Acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
