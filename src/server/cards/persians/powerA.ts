import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class PersiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERSIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.PER,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "PER1A",
            effectText: "Exhaust: spend an action, place 2 cards\n" +
                "on the top of your deck, and pay 1{population}\n" +
                "to break through for {tributary}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards(true)) / 3);
    }
}
