import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class SealStones extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SEAL_STONES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN9",
            effectText: cardEffectReuse.unplayable,
            developmentCost: {progress: 3, material: 3, population: 1},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {progress}"
        });
    }
}
