import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Unrest2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_MAU,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU23",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
