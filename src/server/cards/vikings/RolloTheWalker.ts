import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class RolloTheWalker extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROLLO_THE_WALKER,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK12",
            effectText: "Take the top {fame} card. Exile this card.",
        });
    }
}
