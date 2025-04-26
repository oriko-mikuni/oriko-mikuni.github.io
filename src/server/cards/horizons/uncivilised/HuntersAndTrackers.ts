import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {Player} from "../../../Player";

export class HuntersAndTrackers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HUNTERS_AND_TRACKERS,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.HUNT],
            cardNumber: "3UNC13",
            effectText: [
                "Choose: gain 1{goods} per {hunt} you have in play (including this card) (max 4) OR acquire a {region} and if it has {hunt}, gain 4{material}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {hunt}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.HUNT, param.player.selectCards());
    }
}
