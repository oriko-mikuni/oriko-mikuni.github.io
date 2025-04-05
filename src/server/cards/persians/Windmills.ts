import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Windmills extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WINDMILLS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "PER5",
            effectText: "Free play. Exhaust: treat 1 {fertile} as 3 {production}\n" +
                "for the rest of the turn.",
            developmentCost: {material: 4},
            victoryPoints: 2,
        });
    }
}
