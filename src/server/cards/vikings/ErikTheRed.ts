import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class ErikTheRed extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ERIK_THE_RED,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK21",
            effectText: [
                "Abandon [Scandinavia] and pay 1{population} to find a {region} and add it to your hand.",
                CardEffectReuse.selfExile
            ],
        });
    }
}
