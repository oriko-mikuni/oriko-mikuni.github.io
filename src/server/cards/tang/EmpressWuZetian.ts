import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {PlayerCardLocation} from "../../Player";

export class EmpressWuZetian extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPRESS_WU_ZETIAN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN14",
            effectText: [
                "Cannot be played unless [Mandate of Heaven] is in play and [Emperor Taizong] is in your history.",
                "Choose: break through for a {civilised} OR develop.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 1 : 0;
    }
}
