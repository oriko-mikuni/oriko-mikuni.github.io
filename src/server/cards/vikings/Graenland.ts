import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Graenland extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAENLAND,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "VIK5",
            effectText: [
                CardEffectReuse.garrisonACard,
                "Choose: gain 1{population} OR look at the top card of your nation deck, then you MAY shuffle the nation deck."
            ],
        });
    }
}
