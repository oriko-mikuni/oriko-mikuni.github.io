import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class BritanniaFlavia extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BRITANNIA_FLAVIA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ART12",
            effectText: [
                "Draw a card.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
