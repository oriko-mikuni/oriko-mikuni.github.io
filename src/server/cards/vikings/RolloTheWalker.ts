import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class RolloTheWalker extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROLLO_THE_WALKER,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK12",
            effectText: [
                CardEffectReuse.takeTopFame,
                CardEffectReuse.selfExile
            ],
        });
    }
}
