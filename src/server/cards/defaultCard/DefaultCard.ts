import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";

export class DefaultCard extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DEFAULT,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: undefined,
            startingLocation: undefined,
            nationColour: undefined,
            cardInPlayType: undefined,
            cardNumber: undefined,
            effectText: undefined,
            developmentCost: undefined,
            expansion: undefined,
            playerCount: undefined,
            victoryPoints: undefined,
            victoryPointsString: undefined
        });
    }
}
