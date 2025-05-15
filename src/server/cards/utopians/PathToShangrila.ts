import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PathToShangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PATH_TO_SHANGRILA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO2B",
            effectText: [
                "Exhaust: abandon a {region} to gain 1{population} and 1{progress}.",
                "Solstice: choose: pay all your {progress} (minimum 5) to replace this card with [Gates of Shangri-La] " +
                "OR you MAY draw a {region} from your discard pile."
            ],
            relatedCards: [
                CardName.GATES_OF_SHANGRILA,
                CardName.GATES_OF_SHANGRILA_NEW,
            ]
        });
    }
}
