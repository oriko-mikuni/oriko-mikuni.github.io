import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class Gardening extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GARDENING,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV14",
            effectText: [
                "Gain 1{progress}. If you have a {city} in play, you MAY return a {unrest}. If you have a {metropolis} in play, you MAY return a {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {city}/{metropolis}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.CITY, param.player.selectCards()) +
            Player.countType(CardTypeIcon.METROPOLIS, param.player.selectCards());
    }
}
