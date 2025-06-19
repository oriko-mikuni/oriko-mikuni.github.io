import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class Teleportation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TELEPORTATION,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT7",
            effectText: [
                "Free play. Gain 1{progress}.",
                "Reveal the top card of the main deck and choose: exile it and gain 1{goods} OR add it and a {unrest} into your discard pile.",
                CardEffectReuse.maySelfExile
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-5VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 0 : -5
    }
}
