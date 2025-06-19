import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class WakaTauaWarCanoes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WAKA_TAUA_WAR_CANOES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL10",
            effectText: [
                "Pay 3{population} to choose: acquire a {region} without {ocean} and gain this card as mana OR if {voyaging}, discard 3 mana to acquire a {tributary} (including from exiled cards)."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? -2 : 0
    }
}
