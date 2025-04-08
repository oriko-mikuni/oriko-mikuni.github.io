import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class EmperorQinShiHuang extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_QIN_SHI_HUANG,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN6",
            effectText: "Cannot be played unless [Mandate of Heaven] is in play " +
                "and [King Wu of Qin] is\n" +
                "in your history.\n" +
                "Free play. " + cardEffectReuse.drawTopFame + "\n" +
                cardEffectReuse.selfHistory,
            developmentCost: {material: 3, population: 2},
        });
    }
}
