import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class DrainageSystem extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DRAINAGE_SYSTEM_OLM,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM8",
            effectText: [
                "Solstice: gain 1{population}."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
