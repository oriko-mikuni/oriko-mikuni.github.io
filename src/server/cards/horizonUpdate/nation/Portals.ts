import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {Player} from "../../../Player";
import {GameModule} from "../../../../common/cards/GameModule";

export class Portals extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PORTALS_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO5X",
            effectText: [
                "Exhaust: garrison a {scroll} here to choose: acquire a {region} OR trade.",
                "Solstice: choose: recall a {region} OR abandon this card and gain 1{population}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}",
            gameModule: GameModule.UTOPIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION, param.player.selectCards());
    }
}
