import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Plundering extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PLUNDERING,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG6",
            effectText: [
                "Free play. Draw a card.",
                "Each other player recalls a {region}.",
                "Steal 1{progress} from each {empire} player."
            ],
        });
    }
}
