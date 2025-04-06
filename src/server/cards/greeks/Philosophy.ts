import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Player} from "../../Player";

export class Philosophy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHILOSOPHY,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE10",
            effectText: "Abandon a {pinned} (not a {region}) to\n" +
                "break through for {uncivilised}/{civilised}.",
            developmentCost: {material: 6},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 5 cards"
        });
    }

    public getVictoryPoints(player: Player): number {
        return Math.floor(player.cardCount() / 5);
    }
}
