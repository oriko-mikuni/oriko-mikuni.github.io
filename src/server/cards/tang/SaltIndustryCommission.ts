import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation} from "../../Player";

export class SaltIndustryCommission extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SALT_INDUSTRY_COMMISSION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.MERCHANT, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN3",
            effectText: [
                "Exhaust: take a {unrest} to trade up to 2 times.",
                "Solstice: discard a card. If [Mandate of Heaven] is in play, gain 1{goods}."
            ],
            developmentCost: {material: 4, population: 1},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "4VP if in play, 2VP otherwise",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return isInPlayLocation(param.location) ? 4 : 2;
    }
}
