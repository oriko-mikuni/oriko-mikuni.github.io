import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class CompanionCavalry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.COMPANION_CAVALRY,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC5",
            effectText: [
                "Passive: your [Conquer] cards lose the {barbarian} icon.",
                "Exhaust: when you play a {region}, exhaust this card to draw a card."
            ],
            developmentCost: {population: 3},
            victoryPoints: 3,
            relatedCards: [
                CardName.CONQUER_MAC,
                CardName.CONQUER_MAC1
            ]
        });
    }
}
