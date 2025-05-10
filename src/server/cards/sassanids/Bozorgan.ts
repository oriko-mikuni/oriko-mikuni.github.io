import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Bozorgan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BOZORGAN,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.KNIGHT],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS6",
            effectText: [
                "Choose: develop OR pay 1{population} to acquire a {region}/{civilised}.",
                CardEffectReuse.knightGarrison
            ],
            developmentCost: {material: 4, population: 2},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 3,
        });
    }
}
