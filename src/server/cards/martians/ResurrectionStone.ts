import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class ResurrectionStone extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RESURRECTION_STONE,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MIRACLE],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT11",
            effectText: [
                "Gain 1{progress}.",
                "Free play a card from your discard pile or history, then exile that card (unless it was a {unrest}).",
                CardEffectReuse.maySelfExile
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-3VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 0 : -3
    }
}
