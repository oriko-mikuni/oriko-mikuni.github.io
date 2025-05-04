import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class AlienOverlord extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALIEN_OVERLORD,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT5",
            effectText: [
                "Exile a {gadget} you have in play or from your hand to break through for a {tributary}/{region}.",
                "Each other player abandons a {region}."
            ],
            developmentCost: {population: 3},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {tributary}/{region}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((
            Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards())
            + Player.countSuit(CardSuitIcon.REGION, param.player.selectCards())
        ) / 2);
    }
}
