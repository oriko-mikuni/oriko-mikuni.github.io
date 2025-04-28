import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class HuntersAndNomads extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HUNTERS_AND_NOMADS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG20",
            effectText: [
                "Gain 1{material} per {production}/{hunt} you have in play."
            ],
        });
    }
}
