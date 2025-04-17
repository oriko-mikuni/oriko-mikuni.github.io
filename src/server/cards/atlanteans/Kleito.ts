import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Kleito extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KLEITO,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL9",
            effectText: [
                "Choose: acquire " + cardEffectReuse.fourSuits +
                " OR if [Palace of Poseidon] is in play, " +
                "break through " + cardEffectReuse.fourSuits + " twice.",
                "Sink this card."
            ],
            developmentCost: {progress: 2, material: 3},
            victoryPoints: 3,
        });
    }
}
