import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";

export class CityOfAoudaghost extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_AOUDAGHOST,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.CITY, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG3",
            effectText: [
                CardEffectReuse.tradingCity
            ],
            developmentCost: {population: 5},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {city}/{metropolis}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.CITY, param.player.selectCards()) +
            Player.countType(CardTypeIcon.METROPOLIS, param.player.selectCards());
    }
}
