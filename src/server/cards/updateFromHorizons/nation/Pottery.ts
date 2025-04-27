import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";
import {KeywordNames} from "../../../../common/keywords";

export class Pottery extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POTTERY_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MIN16X",
            effectText: [
                "Solstice: choose: pay 2{material} to add 1{progress} to this card OR abandon this card."
            ],
            gameModule: GameModule.MINOANS,
            keywords: [
                KeywordNames.resourceOnCard
            ]
        });
    }
}
