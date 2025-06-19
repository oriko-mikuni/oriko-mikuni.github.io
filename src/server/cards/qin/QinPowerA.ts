import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class QinPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.QIN_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "QIN1A",
            effectText: [
                "Passive: when you would place {progress} on a card in the market, instead place 1{population}.",
                "Exhaust: if you gain a card from the market with {population} on it, double the {population} gained."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {pinned} in play, excluding {region}"
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
