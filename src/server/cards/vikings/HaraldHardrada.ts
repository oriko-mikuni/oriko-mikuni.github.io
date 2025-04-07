import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class HaraldHardrada extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HARALD_HARDRADA,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK2",
            effectText: "TAKING THIS CARD TRIGGERS\n" +
                "THE GAME END.\n" +
                "Take the top {fame} card.\n" +
                "You MAY break through for {region}.",
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {variable} card"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card[0].victoryPoints === 'variable'
        ).length * 2;
    }
}
