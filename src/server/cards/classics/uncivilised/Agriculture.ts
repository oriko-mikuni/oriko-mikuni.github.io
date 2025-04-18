import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class Agriculture extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AGRICULTURE,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC10",
            effectText: [
                "Exhaust: treat 1 {fertile} as 3 {production} for the rest of the turn."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {fertile}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.FERTILE, param.player.selectCards()) * 2;
    }
}
