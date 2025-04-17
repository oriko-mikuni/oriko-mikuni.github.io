import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class NandaDynasty extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NANDA_DYNASTY,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU10",
            effectText: [
                "Only playable if [Arthashastra] is in play.",
                "Gain 2{population}."
            ],
        });
    }
}
