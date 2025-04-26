import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";

export class Celtica extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTICA_NEW,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL21X",
            effectText: [
                "You MAY return a card from your discard pile to the top of your deck.",
                CardEffectReuse.garrisonACard
            ],
            gameModule: GameModule.CELTS
        });
    }
}
