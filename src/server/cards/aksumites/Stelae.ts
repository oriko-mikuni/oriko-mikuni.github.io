import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Stelae extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STELAE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "AKS9",
            effectText: [
                "Exhaust: free play a {unrest}.",
                "Solstice: choose: garrison a card from your hand or discard pile here OR abandon a {pinned}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 garrisoned cards here",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(
            card => card.location === this.name
        ).length / 2);
    }
}
