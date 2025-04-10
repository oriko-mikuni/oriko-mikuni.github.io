import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class MountainRetreat extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOUNTAIN_RETREAT,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO11",
            effectText: "Exhaust: garrison an {unrest} here to draw\n" +
                "a {scroll} from your discard pile.\n" +
                "Solstice: draw a card OR abandon this card, returning any garrisoned {unrest}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
