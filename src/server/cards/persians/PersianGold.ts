import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class PersianGold extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERSIAN_GOLD,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER7",
            effectText: [
                "All players gain 2{material}.",
                "You gain 1{progress}.",
                "Each other player takes {unrest}."
            ],
            developmentCost: {material: 7},
            victoryPoints: 4,
        });
    }
}
