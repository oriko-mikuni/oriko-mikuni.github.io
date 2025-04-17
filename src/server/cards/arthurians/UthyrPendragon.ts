import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class UthyrPendragon extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UTHYR_PENDRAGON,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ART,
            cardNumber: "ART20",
            effectText:[
                "Break through for {uncivilised}.",
                cardEffectReuse.selfHistory
            ],
        });
    }
}
