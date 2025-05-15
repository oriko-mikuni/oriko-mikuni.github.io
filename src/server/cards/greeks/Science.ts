import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Science extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCIENCE_GRE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GRE6",
            effectText: [
                CardEffectReuse.increaseHandSize1,
                "Your [Advance] cards lose the {barbarian} icon."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
            relatedCards: [
                CardName.ADVANCE_GRE
            ]
        });
    }
}
