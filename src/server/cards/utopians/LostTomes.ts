import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class LostTomes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LOST_TOMES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO7",
            effectText: "Exhaust: garrison a {scroll} here to put\n" +
                "a card from your hand or discard\n" +
                "into your history.\n" +
                "Solstice: If there are 2 {scroll} garrisoned here, you MAY " +
                "abandon this card to draw the top card of the {fame} deck.",
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {fame}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards()) * 2;
    }
}
