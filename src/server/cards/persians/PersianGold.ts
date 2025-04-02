import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class PersianGold extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERSIAN_GOLD,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER7",
            effectText: "All players gain 2{material}. You gain 1{progress}.\n" +
                "Each other player takes {unrest}.",
            developmentCost: "{material}x7",
            victoryPoints: 4,
        });
    }
}
