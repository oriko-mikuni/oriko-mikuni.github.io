import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class Zoroastrianism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ZOROASTRIANISM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS22",
            effectText: [
                "Find [Atar] and add it to your hand.",
                "End of Solstice: if both [Aban] and [Atar] are in play, gain 1{progress} and draw 1 card. If neither of them are, take a {unrest}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.ATAR,
                CardName.ABAN
            ],
        });
    }
}
