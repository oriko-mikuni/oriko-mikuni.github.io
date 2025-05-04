import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class OannesTheSage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OANNES_THE_SAGE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT22",
            effectText: [
                "Break through for a {uncivilised}/{civilised}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
