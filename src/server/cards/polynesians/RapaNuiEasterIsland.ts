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
import {CardLocation} from "../../../common/cards/CardLocation";

export class RapaNuiEasterIsland extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RAPA_NUI_EASTER_ISLAND,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.VOYAGING],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL5",
            effectText: [
                CardEffectReuse.marketExile,
                "Exhaust: gain 1 mana to gain 1{progress}.",
                "Solstice: you MAY pay 1{population} and put 1 mana into legends to gain 1{progress}."
            ],
            developmentCostString: [
                "Development cost: Discard 3 mana, [Rarotonga] must be in play"
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 cards in legends",
            relatedCards: [
                CardName.RAROTONGA
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(
            card => card.location === CardLocation.LEGENDS
        ).length / 3);
    }
}
