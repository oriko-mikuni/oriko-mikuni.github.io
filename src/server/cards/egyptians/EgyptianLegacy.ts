import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class EgyptianLegacy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIAN_LEGACY,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY10",
            effectText: [
                "Each other player takes {unrest} and discards a card. Gain 2{progress}."
            ],
            developmentCost: {material: 5},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {civilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards());
    }
}
