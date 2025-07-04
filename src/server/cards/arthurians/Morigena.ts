import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";


import {CardLocation} from "../../../common/cards/CardLocation";

export class Morigena extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MORIGENA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.ART,
            cardNumber: "ART16",
            effectText: [
                "All players take {unrest}.",
                "You MAY abandon a {region} with garrisoned [Myrddin Wyllt] to put both the active quest and the top card of your nation deck in your discard pile."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history",
            relatedCards: [
                CardName.MYRDDIN_WYLLT_MERLIN
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 2 : 0;
    }
}
