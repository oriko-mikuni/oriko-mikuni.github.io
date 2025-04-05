import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Uxians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UXIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC11",
            effectText: "Steal 2{material} from each other player.\n" +
                "You may return an {exhaust} to your state card.",
        });
    }
}
