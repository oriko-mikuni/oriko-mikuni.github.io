import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Science extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCIENCE_GRE,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GRE6",
            effectText: [
                cardEffectReuse.increaseHandSize1,
                "Your [Advance] cards lose the {barbarian} icon."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
        });
    }
}
