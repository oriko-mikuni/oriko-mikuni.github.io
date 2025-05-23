import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class HaraldHardrada extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HARALD_HARDRADA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK2",
            effectText: [
                "TAKING THIS CARD TRIGGERS THE GAME END.",
                CardEffectReuse.takeTopFame,
                "You MAY break through for {region}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {variable} card"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card.card.victoryPoints === 'variable'
        ).length * 2;
    }
}
