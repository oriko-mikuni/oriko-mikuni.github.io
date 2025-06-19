import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class TangPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TANG_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "TAN1B",
            effectText: [
                "Passive: when you would place 1{progress} on a card in the market, instead place 1{population}.",
                "End of solstice: if the game end has not been triggered, take a {unrest}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 1 {pinned} in play, except {region}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card =>
            isInPlayLocation(card.location) &&
            card.card.headerIcon === CardHeaderIcon.PINNED &&
            !card.card.suit.some(suit1 => suit1 === CardSuitIcon.REGION)
        ).length;
    }
}
