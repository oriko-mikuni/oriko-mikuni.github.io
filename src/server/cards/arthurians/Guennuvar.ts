import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Guennuvar extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GUENNUVAR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ART,
            cardNumber: "ART24",
            effectText: "All other players gain 1{progress}.\n" +
                "Choose: acquire {uncivilised}/{civilised} OR " +
                "abandon [King Arthur] to free play an {empire} card.",
        });
    }
}
