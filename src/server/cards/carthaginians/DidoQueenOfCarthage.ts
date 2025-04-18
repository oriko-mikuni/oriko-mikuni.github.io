import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class DidoQueenOfCarthage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DIDO_QUEEN_OF_CARTHAGE,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR18",
            effectText: [
                "Gain 1{population}.",
                "You MAY acquire {region} and free play it immediately.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
