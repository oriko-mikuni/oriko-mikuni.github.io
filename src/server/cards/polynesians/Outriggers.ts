import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Outriggers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OUTRIGGERS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL22",
            effectText: [
                "Exhaust: treat each {ocean} you have in play as 2 {production} for the rest of the turn.",
                "Solstice: if you have at least 2 mana, gain 1{material}."
            ],
        });
    }
}
