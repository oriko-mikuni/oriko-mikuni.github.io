import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardLocation} from "../../../common/cards/CardLocation";

export class KumaraSweetPotato extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KUMARA_SWEET_POTATO,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL15",
            effectText: [
                "Passive: treat each {fertile} you have in play as {production} when playing [Islander Prosperity].",
                "Exhaust: if {isle-bound}, abandon this card to acquire a {region} without {ocean}."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP if in legends",
            relatedCards: [
                CardName.ISLANDER_PROSPERITY
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? -2 : 0
    }
}
