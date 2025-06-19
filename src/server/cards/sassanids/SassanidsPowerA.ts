import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardLocation} from "../../../common/cards/CardLocation";

export class SassanidsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SASSANIDS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "SAS1A",
            effectText: [
                "Exhaust: when triggering the profit of a {trade-route}, exhaust this card to break through for a {tributary}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {tributary} in your history",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards(
            card => card.location === CardLocation.HISTORY
        )) / 2);
    }
}
