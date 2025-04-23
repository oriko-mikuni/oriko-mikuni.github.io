import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Location, Player} from "../../../Player";
import {GameModule} from "../../../../common/cards/GameModule";

export class AtlanteansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEANS_POWER_A_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ATL1AX",
            effectText: [
                "Passive: when a card would be put into your history, discard it instead and abandon a {pinned} if able.",
                "When a card is sunk, you MAY return a card from your discard pile to the top of your deck."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per sunk {uncivilised}/{fame}/{tributary}/{trade-route}",
            gameModule: GameModule.ATLANTEANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const sunkenCards =
            param.player.selectCards(card => card.location === Location.SUNKEN);
        return Player.countSuit(CardSuitIcon.UNCIVILISED, sunkenCards)
            + Player.countSuit(CardSuitIcon.FAME, sunkenCards)
            + Player.countSuit(CardSuitIcon.TRIBUTARY, sunkenCards)
            + Player.countSuit(CardSuitIcon.TRADE_ROUTE, sunkenCards);
    }
}
