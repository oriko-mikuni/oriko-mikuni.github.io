import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Cafall extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CAFALL,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ART,
            cardNumber: "ART25",
            effectText: "Free play. " +
                "Draw 2 cards and return a\n" +
                "card to the top of your deck.\n" +
                "You MAY exile [Twrch Trwyth] if it is in play or it is the active quest.",
        });
    }
}
