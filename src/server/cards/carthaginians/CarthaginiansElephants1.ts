import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class CarthaginiansElephants1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ELEPHANTS1,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR4",
            effectText: [
                "Each other player abandons a {region}.",
                "You MAY break through for {region}/{tributary}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 3},
            victoryPoints: 2
        });
    }
}
