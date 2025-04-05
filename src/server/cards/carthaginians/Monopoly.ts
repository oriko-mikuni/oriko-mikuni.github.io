import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {Player} from "../../Player";

export class Monopoly extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MONOPOLY,
            suit: [],
            headerIcon: CardHeaderIcon.ATTACK,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR8",
            effectText: "Gain 2{material} and draw a card.\n" +
                "Give each other player a card from your hand or discard pile.",
            developmentCost: {material: 7},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 5{material}"
        });
    }
    public getVictoryPoints(player: Player): number {
        return Math.floor(player.material / 5);
    }
}
