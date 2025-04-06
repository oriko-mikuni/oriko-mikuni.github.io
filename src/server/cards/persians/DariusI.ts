import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class DariusI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DARIUS_I,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER9",
            effectText: "Acquire" + CardEffectReuse.fourSuits + ".\n" +
                CardEffectReuse.selfHistory,
            developmentCost: {material: 3, population: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.suitCount(CardSuitIcon.TRIBUTARY);
    }
}
