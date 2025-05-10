import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class KushanEmpire extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KUSHAN_EMPIRE,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS4",
            effectText: [
                "Free play. Acquire a " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 3,
        });
    }
}
