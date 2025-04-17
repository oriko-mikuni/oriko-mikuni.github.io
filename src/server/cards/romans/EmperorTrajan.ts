import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class EmperorTrajan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_TRAJAN,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM8",
            effectText: [
                "Acquire " + cardEffectReuse.fourSuits + ".",
                cardEffectReuse.selfHistory
            ],
            developmentCost: {material: 2, population: 1},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{population}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.population / 3);
    }
}
