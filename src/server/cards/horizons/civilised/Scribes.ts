import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {PlayerCardLocation} from "../../../Player";

export class Scribes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCRIBES,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV5",
            effectText: [
                "Free play. Choose: put a card from your hand into your history OR exile 2 cards from your history to gain 1 action."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 cards in history"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(
            card => card.location === PlayerCardLocation.HISTORY
        ).length / 3);
    }
}
