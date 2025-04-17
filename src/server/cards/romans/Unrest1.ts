import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_ROM,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM22",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
