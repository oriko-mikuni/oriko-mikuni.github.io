import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Clans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CLANS,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN19",
            effectText: [
                "Take a {unrest} and pay 1{population} to break through for a {region}."
            ],
        });
    }
}
