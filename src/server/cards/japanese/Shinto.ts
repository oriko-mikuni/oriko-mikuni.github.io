import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Shinto extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHINTO,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.JPN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "JPN18",
            effectText: [
                "If {barbarian}, abandon [Tendai Buddhism].",
                "Exhaust: when you play a {uncivilised}/{civilised}, exhaust this card to gain 1{population} and draw 2 cards."
            ],
        });
    }
}
