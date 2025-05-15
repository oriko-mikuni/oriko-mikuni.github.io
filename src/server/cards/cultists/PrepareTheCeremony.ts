import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PrepareTheCeremony extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PREPARE_THE_CEREMONY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "CUL2B",
            effectText: [
                "Passive: when you garrison a card (anywhere), add 1{progress} here.",
                "Your cards lose the {barbarian} icon.",
                "Solstice: choose: remove all {progress} (minimum 5) on this card to replace it with [Ceremonial Gathering] (discarding any garrisoned cards) OR garrison a card here."
            ],
            relatedCards: [
                CardName.CEREMONIAL_GATHERING
            ]
        });
    }
}
