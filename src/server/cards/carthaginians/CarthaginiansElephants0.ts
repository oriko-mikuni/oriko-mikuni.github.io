import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CarthaginiansElephants0 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ELEPHANTS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR3",
            effectText: "Each other player abandons a {region}.\n" +
                "You MAY break through for {region}/{tributary}.\n"+
                CardEffectReuse.selfHistory,
            developmentCost: {population: 3},
            victoryPoints: 2
        });
    }
}
