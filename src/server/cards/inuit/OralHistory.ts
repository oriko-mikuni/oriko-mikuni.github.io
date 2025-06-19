import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class OralHistory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ORAL_HISTORY,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU13",
            effectText: [
                "Passive: when a card would be put into your history, garrison it here instead (this overrides your state card's effect).",
                "Solstice: you MAY garrison a card here."
            ],
            developmentCost: {material: 3},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per card garrisoned here",
            relatedCards: [
                CardName.SUMMER_INU,
                CardName.WINTER_INU
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card => card.location === this.name).length;
    }
}
