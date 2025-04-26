import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class Altar extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALTAR,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC6",
            effectText: [
                "Exhaust: recall a {river}/{fertile}/{ocean} to gain 1{material} and you MAY return a {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {river}/{fertile}/{ocean}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const cards = param.player.selectCards();
        return Math.floor((
            Player.countType(CardTypeIcon.RIVER, cards) +
            Player.countType(CardTypeIcon.FERTILE, cards) +
            Player.countType(CardTypeIcon.OCEAN, cards)
        ) / 2);
    }
}
