import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AswaranCavalry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ASWARAN_CAVALRY,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS10",
            effectText: [
                "Abandon a {region} with a garrisoned {knight} to break through for a {tributary}/{region}.",
                CardEffectReuse.knightGarrison
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
