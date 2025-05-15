import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class TwistedGrove extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TWISTED_GROVE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL20",
            effectText: [
                CardEffectReuse.garrisonACard,
                "Exhaust: place a {unrest} on the top of your deck to return a {exhaust} to your state card.",
                "Solstice: you MAY garrison a {corrupted} card here."
            ],
            relatedCards: [
                CardName.DARK_RITUAL,
                CardName.CORRUPTION_CUL,
                CardName.STRANGE_SIGNS,
                CardName.LURE_OF_DECADENCE,
                CardName.UNSPEAKABLE_WORSHIP
            ]
        });
    }
}
