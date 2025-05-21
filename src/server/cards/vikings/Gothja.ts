import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {KeywordNames} from "../../../common/keywords";

export class Gothja extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GOTHJA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK16",
            effectText: [
                "Look at the top card of your nation deck.",
                "You MAY shuffle the nation deck.",
                "Choose: return an {unrest} and gain 1{population} OR draw 2 cards."
            ],
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
