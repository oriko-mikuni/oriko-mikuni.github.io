import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";
import {PlayerCardLocation} from "../../../Player";

export class Tyranny extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TYRANNY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3CIV16",
            effectText: [
                "Each other player must choose: put a {uncivilised}/{civilised} from their hand into their history OR take a {unrest} and discard it.",
                "You MAY put a card from your hand into your history to draw a card."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 'conditional',
            victoryPointsString: "4VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 4 : 0;
    }
}
