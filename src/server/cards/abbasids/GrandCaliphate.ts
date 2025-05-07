import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {PlayerCardLocation} from "../../Player";

export class GrandCaliphate extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAND_CALIPHATE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB7",
            effectText: [
                "Cannot be played unless [Al-Ma'Mun] is in your history.",
                "All players MAY draw a card. Gain 3{material} per {merchant} you have in play. Gain 1{population} per {city}/{metropolis} you have in play. Develop. Put this card into your history."
            ],
            developmentCost: {progress: 1, goods: 1},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "3VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 3 : 0;
    }
}
