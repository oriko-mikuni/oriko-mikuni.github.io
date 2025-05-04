import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CloningVats extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CLONING_VATS,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT14",
            effectText: [
                "Gain 1{progress}. Free play a card from your discard pile.",
                CardEffectReuse.maySelfExile,
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-3VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 0 : -3
    }
}
