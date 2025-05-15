import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Miyabi extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MIYABI,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN6",
            effectText: [
                "Acquire a card with {goods} on it.",
                "If the card had exactly 1 resource on it, you MAY immediately return the {unrest} taken."
            ],
            developmentCost: {goods: 2, population: 1},
            victoryPoints: 2,
            victoryPointsString: "Return up to 2 {unrest} before scoring",
            relatedCards: [
                CardName.APPEAL_TO_CHINA
            ]
        });
    }
}
