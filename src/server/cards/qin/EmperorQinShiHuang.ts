import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class EmperorQinShiHuang extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_QIN_SHI_HUANG,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN6",
            effectText: [
                "Cannot be played unless [Mandate of Heaven] is in play and [King Wu of Qin] is in your history.",
                "Free play. " + CardEffectReuse.drawTopFame,
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 3, population: 2},
            relatedCards: [
                CardName.MANDATE_OF_HEAVEN_QIN,
                CardName.KING_WU_OF_QIN
            ]
        });
    }
}
