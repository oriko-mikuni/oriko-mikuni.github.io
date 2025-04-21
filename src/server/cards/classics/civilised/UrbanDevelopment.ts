import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";

export class UrbanDevelopment extends Card implements ICard {
    constructor() {
        super({
            name: CardName.URBAN_DEVELOPMENT_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "1CIV12",
            effectText: [
                "Gain 1{material} and 1{population} per {city}/{metropolis} in your play area."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {city}/{metropolis}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return (
            Player.countType(CardTypeIcon.CITY, param.player.selectCards()) +
            Player.countType(CardTypeIcon.METROPOLIS, param.player.selectCards())
        ) * 2;
    }
}
