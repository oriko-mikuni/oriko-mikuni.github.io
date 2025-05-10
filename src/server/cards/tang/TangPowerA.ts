import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation} from "../../Player";

export class TangPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TANG_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "TAN1A",
            effectText: [
                "Passive: when you would place 1{progress} on a card in the market, instead place 1{population}.",
                "Exhaust: discard 2 cards to gain 1{progress}.",
                "End of solstice: if the game end has not been triggered, take a {unrest}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {pinned} in play, except {region}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(card =>
            isInPlayLocation(card.location) &&
            card.card.headerIcon === CardHeaderIcon.PINNED &&
            !card.card.suit.some(suit1 => suit1 === CardSuitIcon.REGION)
        ).length / 3);
    }
}
