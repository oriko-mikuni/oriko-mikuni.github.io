import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MinistryOfTheArmy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINISTRY_OF_THE_ARMY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN18",
            effectText: [
                "Exhaust: discard a {civilised} and pay 2{population} to choose: acquire a {region} OR spend 1 action to acquire a {tributary}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
