import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MannoReservoir extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MANNO_RESERVOIR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.JPN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "JPN13",
            effectText: [
                "Exhaust: gain 1{material} per {river} you have in play."
            ],
        });
    }
}
