import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Hannibal extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HANNIBAL,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR6",
            effectText: "You MAY acquire " + CardEffectReuse.fourSuits + ".\n" +
                "You MAY draw a card.\n" +
                "You MAY draw a card from your history.\n" +
                CardEffectReuse.selfHistory,
            developmentCost: "{population}x4",
            victoryPoints: 4,
        });
    }
}
