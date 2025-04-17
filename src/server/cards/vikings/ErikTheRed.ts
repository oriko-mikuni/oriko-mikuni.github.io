import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class ErikTheRed extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ERIK_THE_RED,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK21",
            effectText: [
                "Abandon [Scandinavia] and pay 1{population} to find a {region} and add it to your hand.",
                cardEffectReuse.selfExile
            ],
        });
    }
}
