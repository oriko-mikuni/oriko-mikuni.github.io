import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Petroglyphs extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PETROGLYPHS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI16",
            effectText: [
                "Solstice: you MAY draw the top card of your deck, if able, and choose: discard it OR return it to the top OR put it into your history."
            ],
        });
    }
}
