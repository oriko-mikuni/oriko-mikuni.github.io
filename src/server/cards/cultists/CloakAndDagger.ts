import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class CloakAndDagger extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CLOAK_AND_DAGGER,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL10",
            effectText: [
                "Exile a card from the market to acquire {region}/{tributary}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards());
    }
}
