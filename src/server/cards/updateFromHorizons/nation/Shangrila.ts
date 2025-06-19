import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";
import {CardLocation, isInPlayLocation} from "../../../../common/cards/CardLocation";

export class Shangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHANGRILA_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO3BX",
            effectText: [
                "Solstice: choose: discard a card to gain 2{population}, then each other player MAY draw a card OR if you have at least 24{population}, put this card into your history and TRIGGER THE GAME END."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "3VP if in play, 10VP if in history",
            gameModule: GameModule.UTOPIANS
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 10 :
            isInPlayLocation(param.location) ? 3 : 0;
    }
}
