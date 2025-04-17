import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class AtlanteansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ATL1A",
            effectText: [
                "Passive: cards that would be placed into your history are instead discarded.",
                "Exhaust: when a card is sunk, exhaust this card to put a card from your discard pile on top of your deck."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.REGION, param.player.selectCards()) / 2);
    }
}
