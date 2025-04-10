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
            effectText: "Exhaust: abandon a {region} to\n" +
                "gain 1{population} and 1{progress}.\n" +
                "Solstice: choose: pay all your {progress}\n" +
                "(minimum 5) to replace this card with\n" +
                "[Gates of Shangri-La] OR you MAY draw\n" +
                "a {region} from your discard pile.",
        });
    }
}
