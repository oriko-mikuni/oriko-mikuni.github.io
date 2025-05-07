import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class RockCutArchitecture extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROCK_CUT_ARCHITECTURE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.GUP,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GUP13",
            effectText: [
                "Exhaust: when you acquire or break through for a {uncivilised}/{civilised}, exhaust this card and discard a card to gain 1{goods}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
