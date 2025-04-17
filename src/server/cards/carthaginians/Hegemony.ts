import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Hegemony extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HEGEMONY,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR5",
            effectText: [
                "Pay 2{material} to acquire " + CardEffectReuse.fourSuits + ".",
                "All players MAY draw a card."
            ],
            developmentCost: {material: 3, population: 1},
            victoryPoints: 2,
        });
    }
}
