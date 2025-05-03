import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TattoosInu extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TATTOOS_INU,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU16",
            effectText: [
                "Free play. Draw a card from your deck or your discard pile."
            ],
            developmentCost: {population: 2},
            victoryPoints: 3,
        });
    }
}
