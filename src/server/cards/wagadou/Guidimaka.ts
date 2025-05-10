import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Guidimaka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GUIDIMAKA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG18",
            effectText: [
                CardEffectReuse.garrisonACard,
                "Choose: exile a card from the market OR discard a card to gain 2{population}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
