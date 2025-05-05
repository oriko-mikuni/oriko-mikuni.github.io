import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Temptation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TEMPTATION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL7",
            effectText: [
                "Exile a card from the market to acquire {uncivilised}/{civilised}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
