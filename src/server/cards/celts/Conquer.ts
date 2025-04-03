import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Conquer extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_CEL,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL8",
            effectText: CardEffectReuse.conquer
        });
    }
}
