import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class FlyingDrone extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FLYING_DRONE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT16",
            effectText: [
                "Free play. Choose: pay 1{population} to find a {region} and add it to your hand OR abandon [Landing Site] and take a {unrest} to break through for a {region}."
            ],
        });
    }
}
