import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Ashoka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ASHOKA,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU5",
            effectText: [
                CardEffectReuse.takeTopFame,
                "Reveal your hand, draw deck, and discard pile and put all {attack} and this card into your history."
            ],
            developmentCost: {population: 3},
            victoryPoints: 1,
        });
    }
}
