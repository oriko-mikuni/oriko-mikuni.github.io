import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";


import {CardLocation} from "../../../common/cards/CardLocation";

export class TheNileCorridor extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THE_NILE_CORRIDOR,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO7",
            effectText: [
                "Commerce: free play a " + CardEffectReuse.fourSuits + "/{trade-route}.",
                "Profit (3{goods}): choose: break through for a {civilised} OR if {empire}, develop. Put this card into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 2 : 0;
    }
}
