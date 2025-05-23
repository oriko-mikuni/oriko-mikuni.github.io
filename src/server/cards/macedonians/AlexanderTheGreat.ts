import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AlexanderTheGreat extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALEXANDER_THE_GREAT,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC6",
            effectText: [
                "Cannot be played unless [Alexander] is in your history.",
                "Free play. You MAY acquire {region} twice, including from exiled cards.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
            relatedCards: [
                CardName.ALEXANDER
            ]
        });
    }
}
