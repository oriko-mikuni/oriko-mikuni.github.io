import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Lydians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LYDIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.PER,
            cardNumber: "PER21",
            effectText: "Gain 2{population}.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
