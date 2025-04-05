import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Chainmail extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHAINMAIL,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL4",
            effectText: "Passive: when you play an {attack},\n" +
                "gain 1{progress}.",
            developmentCost: {material: 3, population: 1},
            victoryPoints: 4,
        });
    }
}
