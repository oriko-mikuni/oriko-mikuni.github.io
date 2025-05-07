import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GeEzScript extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GE_EZ_SCRIPT,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "AKS18",
            effectText: [
                "Exhaust: put a card from your hand into your history.",
                "If the card was a {uncivilised}/{civilised}, gain 1{progress}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
