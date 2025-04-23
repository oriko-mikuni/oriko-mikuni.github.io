import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class LostTomes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LOST_TOMES_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO7X",
            effectText: [
                "Exhaust: choose: gain 1{goods} OR garrison a {scroll} here and put a card from your hand or discard pile into your history.",
                "Solstice: if there are at least 2 {scroll} garrisoned here, abandon this card to take the top {fame} card."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fame}",
            gameModule: GameModule.UTOPIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards());
    }
}
