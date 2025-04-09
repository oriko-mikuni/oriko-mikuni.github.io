import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class SanLorenzoTenochtitlan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SAN_LORENZO_TENOCHTITLAN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM2",
            effectText: "Exhaust: return a card to the top of\n" +
                "your deck to choose: return a {mask} from\n" +
                "your discard to your hand OR gain\n" +
                "1{population} and 1{material}.",
        });
    }
}
