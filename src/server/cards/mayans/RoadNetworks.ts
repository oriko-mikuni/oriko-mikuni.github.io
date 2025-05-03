import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class RoadNetworks extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROAD_NETWORKS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY22",
            effectText: [
                "Exhaust: discard a {mask} and spend 1 action to acquire a {region}.",
                "If the discarded card was not a [Stone Mask], you MAY acquire a {tributary} instead."
            ],
        });
    }
}
