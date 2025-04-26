import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {PlayerCardLocation} from "../../../Player";

export class Qin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.QIN,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1TRI5",
            effectText: [
                CardEffectReuse.increaseHandSize1
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {pinned} cards in play excluding {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(card =>
            card.location === PlayerCardLocation.IN_PLAY &&
            card.card.headerIcon === CardHeaderIcon.PINNED &&
            !card.card.suit.some(suit1 => suit1 === CardSuitIcon.REGION)
        ).length / 3);
    }
}
