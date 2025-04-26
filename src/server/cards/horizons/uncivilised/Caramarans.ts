import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class Catamarans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CATAMARANS,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC11",
            effectText: [
                "Exhaust: treat 1 {ocean} as 4 {production} for the rest of the turn."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {ocean}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.OCEAN, param.player.selectCards()) * 2;
    }
}
