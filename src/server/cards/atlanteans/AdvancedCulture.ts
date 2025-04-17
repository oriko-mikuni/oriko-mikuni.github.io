import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class AdvancedCulture extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCED_CULTURE,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL2",
            effectText: [
                "Acquire {uncivilised}/{civilised}."
            ],
            developmentCost: {progress: 1, material: 5},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION, param.player.selectCards());
    }
}
