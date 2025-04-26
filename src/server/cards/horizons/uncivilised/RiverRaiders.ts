import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class RiverRaiders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RIVER_RAIDERS,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3UNC14",
            effectText: [
                "Draw a card. Steal 1{goods} from each other player. Anyone unable to pay takes a {unrest} and gains 1{goods}.",
                "You MAY garrison this card under a {region} with {river} you have in play to gain 1 action."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {river}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.RIVER, param.player.selectCards()) * 2;
    }
}
