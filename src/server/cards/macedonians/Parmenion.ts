import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Parmenion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PARMENION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC4",
            effectText: [
                "You MAY acquire {region}/{tributary} and immediately free play it.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 2,
        });
    }
}
