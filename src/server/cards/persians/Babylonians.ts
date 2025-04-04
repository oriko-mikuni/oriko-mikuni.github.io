import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Babylonians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BABYLONIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER8",
            effectText: "Free play. Acquire " + CardEffectReuse.fourSuits + ".\n" +
                CardEffectReuse.selfHistory,
            developmentCost: {population: 5},
            victoryPoints: 4,
        });
    }
}
