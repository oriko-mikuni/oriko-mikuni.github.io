import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Hannibal extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HANNIBAL,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR6",
            effectText: [
                "You MAY acquire " + CardEffectReuse.fourSuits + ".",
                "You MAY draw a card.",
                "You MAY draw a card from your history.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 4},
            victoryPoints: 4,
        });
    }
}
