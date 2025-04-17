import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Daochang extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DAOCHANG,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO6",
            effectText: [
                "Passive: when another player plays an {attack}, you MAY pay 1{population} to avoid its effect.",
                "Exhaust: garrison a {scroll} here to acquire {tributary}.",
                "Solstice: choose: take {unrest} OR abandon this card and gain 1{material}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards());
    }
}
