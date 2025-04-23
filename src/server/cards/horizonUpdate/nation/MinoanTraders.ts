import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class MinoanTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINOAN_TRADERS_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN3X",
            effectText: [
                "All players MAY gain 1{goods}.",
                "Choose: gain 1{material} per {production} you have in play and per card in your development area OR gain 1{progress} per {city}/{metropolis} you have in play."
            ],
            developmentCost: {progress: 1, material: 2, population: 1},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {production}",
            gameModule: GameModule.MINOANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION, param.player.selectCards()) / 2);
    }
}
