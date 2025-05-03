import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Patolli extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PATOLLI,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY15",
            effectText: [
                "Free play. Discard 2 cards and pay 1{material} to reveal the top card of the main deck.",
                "If it is a {pinned}, exile it and gain 1{goods}. Otherwise, add it and a {unrest} into your discard pile."
            ],
        });
    }
}
