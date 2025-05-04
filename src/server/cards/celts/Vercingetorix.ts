import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";

export class Vercingetorix extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VERCINGETORIX,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL7",
            effectText: [
                "You MAY acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 4},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
