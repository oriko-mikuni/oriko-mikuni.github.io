import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_JPN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN21",
            effectText: CardEffectReuse.glory,
        });
    }
}
