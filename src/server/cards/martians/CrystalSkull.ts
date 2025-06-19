import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class CrystalSkull extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CRYSTAL_SKULL,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT12",
            effectText: [
                "Free play. Gain 1{progress}.",
                "Draw 2 cards, if able. You MAY put a card from your hand into your history.",
                CardEffectReuse.maySelfExile
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 0 : -2
    }
}
