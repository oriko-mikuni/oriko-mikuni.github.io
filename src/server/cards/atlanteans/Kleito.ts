import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Kleito extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KLEITO,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL9",
            effectText: [
                "Choose: acquire " + CardEffectReuse.fourSuits +
                " OR if [Palace of Poseidon] is in play, " +
                "break through " + CardEffectReuse.fourSuits + " twice.",
                "Sink this card."
            ],
            developmentCost: {progress: 2, material: 3},
            victoryPoints: 3,
            relatedCards: [
                CardName.PALACE_OF_POSEIDON
            ]
        });
    }
}
