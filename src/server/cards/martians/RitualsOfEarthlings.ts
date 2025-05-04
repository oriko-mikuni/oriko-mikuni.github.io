import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class RitualsOfEarthlings extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RITUALS_OF_EARTHLINGS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT4",
            effectText: [
                "Exile a {gadget} you have in play or from your hand to choose: develop OR break through for a {uncivilised}/{civilised}."
            ],
            developmentCost: {population: 3},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {uncivilised}/{civilised}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((
            Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards())
            + Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards())
        ) / 2);
    }
}
