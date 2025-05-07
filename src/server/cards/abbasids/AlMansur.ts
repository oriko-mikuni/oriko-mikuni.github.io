import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AlMansur extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AL_MANSUR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB10",
            effectText: [
                "Each other player gains 1{goods}.",
                "Break through for a {uncivilised}.",
                "Choose: free play a {city}/{metropolis} OR trade.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
