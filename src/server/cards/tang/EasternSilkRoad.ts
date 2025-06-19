import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class EasternSilkRoad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EASTERN_SILK_ROAD,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "TAN4",
            effectText: [
                "Commerce: draw a card and acquire a {civilised} (including from exiled cards).",
                "Profit (3{goods}): break through for a " + CardEffectReuse.fourSuits + ". Put this card into your history."
            ],
            developmentCost: {material: 3, population: 1},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "3VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 3 : 0;
    }
}
