import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Raiders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RAIDERS,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY13",
            effectText: "Free play. Draw 2 cards.\n" +
                "All other players recall a {region}.\n" +
                "Steal 1{population} from each {empire} player.",
        });
    }
}
