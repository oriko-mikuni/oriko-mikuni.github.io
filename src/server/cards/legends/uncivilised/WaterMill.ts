import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class WaterMill extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WATER_MILL,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC11",
            effectText: [
                "Exhaust: choose: recall a {fertile} to gain 2{material} and 1{population} OR recall a {river} to gain 1 action."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fertile}/{river}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.FERTILE, param.player.selectCards())
            + Player.countType(CardTypeIcon.RIVER, param.player.selectCards());
    }
}
