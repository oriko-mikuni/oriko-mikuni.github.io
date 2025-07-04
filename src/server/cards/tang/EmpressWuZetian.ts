import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

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
            relatedCards: [
                CardName.MANDATE_OF_HEAVEN_TAN,
                CardName.EMPEROR_TAIZONG
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 1 : 0;
    }
}
