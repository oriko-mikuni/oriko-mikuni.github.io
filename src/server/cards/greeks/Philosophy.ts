import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Philosophy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHILOSOPHY_GRE,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE10",
            effectText: [
                "Abandon a {pinned} (not a {region}) to break through for {uncivilised}/{civilised}."
            ],
            developmentCost: {material: 6},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 5 cards"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards().length / 5);
    }
}
