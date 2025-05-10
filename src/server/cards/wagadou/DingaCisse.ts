import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class DingaCisse extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DINGA_CISSE,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardNumber: "WAG8",
            effectText: [
                "Break through for a {uncivilised}/{civilised}/{trade-route}.",
                "If it has {city}/{metropolis}, gain 1{goods}.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
