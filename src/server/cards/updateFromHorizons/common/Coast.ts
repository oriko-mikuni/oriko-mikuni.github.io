import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";

export class Coast extends Card implements ICard {
    constructor() {
        super({
            name: CardName.COAST_NEW,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.FERTILE, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG4X",
            effectText: [
                "Draw a card.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
            gameModule: GameModule.CLASSICS_COMMON
        });
    }
}
