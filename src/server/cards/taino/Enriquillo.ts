import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {KeywordNames} from "../../../common/keywords";

export class Enriquillo extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ENRIQUILLO,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAI,
            cardNumber: "TAI3",
            effectText: [
                "Look at the top 3 cards of the {fame} deck.",
                CardEffectReuse.takeOne,
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 5},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}",
            keywords: [
                KeywordNames.look
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards());
    }
}
