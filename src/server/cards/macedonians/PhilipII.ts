import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class PhilipII extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHILIP_II,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC16",
            effectText: [
                "Acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
