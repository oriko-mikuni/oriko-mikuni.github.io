import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class EgyptiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "EGY1B",
            effectText: [
                CardEffectReuse.increaseHandSize1
            ],
            victoryPoints: 'variable',
            victoryPointsString: "3VP per {civilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards()) * 3;
    }
}
