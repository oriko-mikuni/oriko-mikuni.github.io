import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Luoyang extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LUOYANG,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN12",
            effectText: [
                CardEffectReuse.metropolis
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
