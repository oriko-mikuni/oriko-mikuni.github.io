import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {effectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";
import {Location} from "../../Player";

export class StoneMask extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STONE_MASK_OLM,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM12",
            effectText: effectReuseMultipleSentences.stoneMask,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 1 : 0;
    }
}
