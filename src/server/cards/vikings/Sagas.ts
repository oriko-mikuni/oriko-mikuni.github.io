import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Sagas extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SAGAS,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "VIK8",
            effectText: "Solstice: you MAY garrison a card.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per garrisoned card here"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card => card[1] === this.name).length;
    }
}
