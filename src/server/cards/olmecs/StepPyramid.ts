import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class StepPyramid extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STEP_PYRAMIDS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM3",
            effectText: [
                "Exhaust: when a card effect requires you to discard {mask}, exhaust this card to discard 1 {mask} fewer.",
                "Solstice: you MAY draw a {mask} from your discard pile."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
