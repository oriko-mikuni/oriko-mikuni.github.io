import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Triumvirate extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMVIRATE,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM18",
            effectText: [
                "Break through for {uncivilised}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
