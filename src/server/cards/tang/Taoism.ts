import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Taoism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAOISM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN15",
            effectText: [
                "Exhaust: choose: add 1{population} to a card in the market OR if you have returned a {unrest} from your hand this turn, discard a {civilised} to gain 1 action."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
