import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class DharTichitt extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DHAR_TICHITT,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG16",
            effectText: [
                "Passive: when another player plays a {attack} that causes you to abandon or recall a {region}, you MAY pay 2{material} to that player to avoid its effects.",
                "Exhaust: discard a card to add 1{material} to a card in the market. Each other player gains 1{material}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
