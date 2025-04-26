import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {Player} from "../../../Player";

export class Magistrate extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAGISTRATE,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV9",
            effectText: [
                "Gain 3{material}. All players MAY put a card from their hand or discard pile into their history. Gain 1{progress} per player who did."
            ],
            playerCount: 4,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {production}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION, param.player.selectCards()) / 2);
    }
}
