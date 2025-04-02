import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_CEL,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL15",
            effectText: CardEffectReuse.GLORY,
        });
    }
}
