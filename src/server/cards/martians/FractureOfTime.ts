import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class FractureOfTime extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FRACTURE_OF_TIME,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT8",
            effectText: [
                "Free play. Gain 1{progress}.",
                "Put a " + CardEffectReuse.fourSuits + " from exile to the bottom of the main deck.",
                "You MAY put a card (not a {gadget}) from your hand into history to gain 1 action.",
                CardEffectReuse.maySelfExile
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-3VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 0 : -3
    }
}
