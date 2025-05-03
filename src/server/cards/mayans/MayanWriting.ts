import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MayanWriting extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAYAN_WRITING,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY13",
            effectText: [
                "Exhaust: choose: return 1 {exhaust} to your state card OR put a card from your discard pile into your history to draw a card."
            ],
        });
    }
}
