import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CosmopolitanCulture extends Card implements ICard {
    constructor() {
        super({
            name: CardName.COSMOPOLITAN_CULTURE,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN11",
            effectText: [
                "Draw a card per {city}/{metropolis} you have in play (including this one).",
                "Gain 1{material} and 1{population} for each of these icons you have at least 1 of in play: {river}, {fertile}, {ocean}, {merchant}.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
