import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Mathematics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MATHEMATICS_QIN,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN7",
            effectText: [
                CardEffectReuse.increaseHandSize1,
                "Your [Advance] cards lose the {barbarian} icon."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 2,
            relatedCards: [
                CardName.ADVANCE_QIN
            ]
        });
    }
}
