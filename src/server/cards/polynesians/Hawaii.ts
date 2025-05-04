import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Hawaii extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HAWAII,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.VOYAGING],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL6",
            effectText: [
                CardEffectReuse.marketExile,
                "Exhaust: gain 1 action, if {voyaging}, you MAY draw a card from your discard pile.",
                "Solstice: choose: discard 2 cards OR take a {unrest}."
            ],
            developmentCostString: [
                "Development cost: Discard 3 mana"
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {empire}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card =>
            card.card.stateSymbol.some(state => state === CardStateIcon.EMPIRE)
        ).length * 2;
    }
}
