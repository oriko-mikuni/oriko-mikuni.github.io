import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Tents extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TENTS,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SCY21",
            effectText: [
                "Exhaust: when you play a {region}, exhaust this card to gain 1{population}.",
                "Solstice: you MAY recall a {region}."
            ],
        });
    }
}
