import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class Shaduf extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHADUF,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC12",
            effectText: [
                "Exhaust: when you gain {material} from a {river} in play, exhaust this card to gain 1{progress}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {river}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.RIVER, param.player.selectCards()) * 2;
    }
}
