import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class GreatMoravia extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREAT_MORAVIA,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG11",
            effectText: [
                "Gain 2{population}. Acquire a {region} (including from exiled cards).",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
