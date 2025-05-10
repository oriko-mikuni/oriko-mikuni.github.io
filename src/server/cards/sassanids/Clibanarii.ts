import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Clibanarii extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CLIBANARII,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS12",
            effectText: [
                "Each other player abandons a {region}.",
                "Choose: abandon 2 {region} and put this card into your history to take the top {fame} card OR garrison this card in a {region} to trigger that card's play effect."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
