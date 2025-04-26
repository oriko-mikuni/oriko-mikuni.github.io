import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";

export class Terraces extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TERRACES,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC12",
            effectText: [
                "Exhaust: when you play a {river}/{fertile}, exhaust this card to draw a card from your discard pile."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {production}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION, param.player.selectCards()) / 3);
    }
}
