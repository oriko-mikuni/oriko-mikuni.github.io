import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Lighthouse extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LIGHTHOUSE,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GRE9",
            effectText: [
                "Exhaust: choose: place an {attack} from your discard pile on the top of your deck OR swap an exiled card with a card in the market."
            ],
            developmentCost: {material: 5},
            victoryPoints: 3,
        });
    }
}
