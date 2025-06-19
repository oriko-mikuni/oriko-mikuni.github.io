import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";


import {CardLocation} from "../../../common/cards/CardLocation";

export class StoneMask5 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STONE_MASK_OLM5,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM21",
            effectText: CardEffectReuse.stoneMask,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 1 : 0;
    }
}
