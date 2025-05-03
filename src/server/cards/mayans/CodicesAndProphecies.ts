import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CodicesAndProphecies extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CODICES_AND_PROPHECIES,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY3",
            effectText: [
                "Find any card and free play it.",
                "If the game end has been triggered, gain 3{progress}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
