import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Legions extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LEGIONS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ROM5",
            effectText: [
                cardEffectReuse.increaseHandSize1,
                "Your [Conquer] cards lose the {barbarian} icon."
            ],
            developmentCost: {population: 3},
            victoryPoints: 2,
        });
    }
}
