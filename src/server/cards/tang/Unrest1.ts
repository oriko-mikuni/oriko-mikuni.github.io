import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_TAN_SUPPLY1,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN26",
            effectText: [
                CardEffectReuse.setupUnrestL + "Tang" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: -2,
        });
    }
}
