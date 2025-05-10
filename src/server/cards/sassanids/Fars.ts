import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Fars extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FARS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS16",
            effectText: [
                "Choose: gain 1{material} OR gain 1{population}.",
                CardEffectReuse.garrisonACard
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
