import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class VastWealth extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VAST_WEALTH,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL8",
            effectText: [
                "Passive: reduce development cost by 2{material} (to a minimum of 0).",
                "Exhaust: when you return an {unrest}, exhaust this card to gain 3{material}."
            ],
            developmentCost: {material: 5},
            victoryPoints: 1,
        });
    }
}
