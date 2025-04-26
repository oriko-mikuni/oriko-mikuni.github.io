import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {EffectReuseMultipleSentences} from "../../../../common/cards/CardEffectReuse";
import {PlayerCardLocation} from "../../../Player";

export class JadeMask extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JADE_MASK_L,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            cardNumber: "2UNC2",
            effectText: EffectReuseMultipleSentences.stoneMask,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 1 : 0;
    }
}
