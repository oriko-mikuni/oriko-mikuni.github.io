import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class MarketStall extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MARKET_STALL,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3CIV12",
            effectText: [
                "Exhaust: each other player MAY draw a card.",
                "Choose: pay 1{goods} to gain 2{progress} OR pay 1{progress} to gain 2{goods}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {goods}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.scoringResources.goods;
    }
}
