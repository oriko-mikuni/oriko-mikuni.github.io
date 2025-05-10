import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class YuXuanji extends Card implements ICard {
    constructor() {
        super({
            name: CardName.YU_XUANJI,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN10",
            effectText: [
                "Return a {unrest} from your discard pile.",
                "Break through for a {civilised} (including from exiled cards).",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 4},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 3,
        });
    }
}
