import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Advance extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_CAR,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR11",
            effectText: [
                CardEffectReuse.advance
            ]
        });
    }
}
