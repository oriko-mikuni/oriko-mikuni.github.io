import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Legalism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LEGALISM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN16",
            effectText: [
                "Abandon [Confucianism].",
                "Exhaust: pay 3{population} to acquire {region}/{tributary}."
            ],
        });
    }
}
