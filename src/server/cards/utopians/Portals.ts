import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class Portals extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PORTALS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO5",
            effectText: "Exhaust: garrison a {scroll} here to\n" +
                "acquire {region}.\n" +
                "Solstice: choose: recall a {region} OR\n" +
                "abandon this card and gain 1{population}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION, param.player.selectCards());
    }
}
