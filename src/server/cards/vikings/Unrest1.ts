import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_VIK_NATION1,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK15",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
