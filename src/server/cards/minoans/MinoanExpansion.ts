import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class MinoanExpansion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINOAN_EXPANSION,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN8",
            effectText: [
                "Each other player abandons a {region}.",
                "You MAY acquire " + CardEffectReuse.fourSuits + "."
            ],
            developmentCost: {population: 4},
            victoryPoints: 3,
        });
    }
}
