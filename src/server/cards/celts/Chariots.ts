import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Chariots extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHARIOTS,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL5",
            effectText: [
                "Passive: you may acquire exiled {region}.",
                "Your [Conquer] and {attack} cards lose the {barbarian} icon."
            ],
            developmentCost: {population: 3},
            victoryPoints: 4,
            relatedCards: [
                CardName.CONQUER_CEL,
                CardName.CONQUER_CEL1
            ]
        });
    }
}
