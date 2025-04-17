import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class OlmecHieroglyphics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLMEC_HIEROGLYPHICS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM10",
            effectText: [
                "Exhaust to choose: return an {exhaust} to your state card OR spend an action to return a card from your discard pile to your hand."
            ],
        });
    }
}
