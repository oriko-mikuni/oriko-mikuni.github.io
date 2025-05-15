import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class SaintStephenI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SAINT_STEPHEN_I,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG3",
            effectText: [
                "Cannot be played unless [Arpad] is in your history.",
                "Put up to 3 cards from your hand and/or discard pile into your history.",
                CardEffectReuse.takeTopFame,
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 5},
            victoryPoints: 4,
            relatedCards: [
                CardName.ARPAD
            ]
        });
    }
}
