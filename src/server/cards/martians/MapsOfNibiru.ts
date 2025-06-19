import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class MapsOfNibiru extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAPS_OF_NIBIRU,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.SCROLL],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT6",
            effectText: [
                "Gain 1{progress}.",
                "Pay 2{population} to break through for an exiled " + CardEffectReuse.fourSuits + ".",
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
