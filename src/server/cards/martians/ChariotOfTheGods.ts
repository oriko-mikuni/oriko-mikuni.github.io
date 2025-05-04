import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class ChariotOfTheGods extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHARIOT_OF_THE_GODS,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT10",
            effectText: [
                "Gain 1{progress}. Acquire a {region}/{tributary}.",
                "Each other player recalls a {region}.",
                "You MAY choose: garrison this card in a {region} to trigger that card's play effect OR exile this card."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-3VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 0 : -3
    }
}
