import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {PlayerCardLocation} from "../../../Player";

export class Mauryans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAURYANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1TRI10",
            effectText: [
                "Solstice: choose: gain 2{material} OR return a {region} from your discard pile to your hand."
            ],
            playerCount: 4,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 cards in history"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(card =>
            card.location === PlayerCardLocation.HISTORY
        ).length / 2);
    }
}
