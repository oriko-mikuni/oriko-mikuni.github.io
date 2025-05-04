import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class TakeMeToYourLeader extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAKE_ME_TO_YOUR_LEADER,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT15",
            effectText: [
                "Choose: move 2 of your {progress} to a market card OR pay 2{population} to acquire a {region}/{tributary}.",
                "You MAY convert any {progress} gained to {population}."
            ],
        });
    }
}
