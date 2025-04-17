import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_ROM1,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM23",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
