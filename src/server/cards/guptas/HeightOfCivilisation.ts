import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class HeightOfCivilisation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HEIGHT_OF_CIVILISATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.GUP,
            cardNumber: "GUP12",
            effectText: [
                "Choose: draw 3 cards OR gain 2{material} per {production} OR gain 2{population} per {region} OR gain 1{goods} and 1{progress} per {merchant} you have in play.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
