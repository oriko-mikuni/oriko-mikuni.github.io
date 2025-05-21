import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {KeywordNames} from "../../../common/keywords";

export class TaliesinTheBard extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TALIESIN_THE_BARD,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardNumber: "ART6",
            effectText: [
                "Find a {knight} and put it to your history to look at the top 2 cards of the {fame} deck.",
                "Take one of those cards."
            ],
            victoryPoints: 1,
            keywords: [
                KeywordNames.find,
                KeywordNames.look
            ],
        });
    }
}
