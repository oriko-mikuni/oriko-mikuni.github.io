import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class RomanInvasion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMAN_INVASION,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM4",
            effectText: "You MAY acquire {region}/{tributary}.\n" +
                "Each other player abandons a {region}.",
            developmentCost: "{population}x3",
            victoryPoints: 2,
        });
    }
}
