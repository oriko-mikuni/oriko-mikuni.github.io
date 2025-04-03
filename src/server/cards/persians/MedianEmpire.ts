import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class MedianEmpire extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MEDIAN_EMPIRE,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.PER,
            cardNumber: "PER12",
            effectText: "Gain 4{material}.\n" + cardEffectReuse.selfHistory,
        });
    }
}
