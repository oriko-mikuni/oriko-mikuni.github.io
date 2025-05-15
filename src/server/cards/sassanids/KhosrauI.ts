import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class KhosrauI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KHOSRAU_I,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS2",
            effectText: [
                "Cannot be played unless [Ardashir I] is in your history, and [Aban], [Atar], and [Zoroastrianism] are in play.",
                CardEffectReuse.takeTopFame,
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            relatedCards: [
                CardName.ARDASHIR_I,
                CardName.ATAR,
                CardName.ZOROASTRIANISM,
                CardName.ABAN
            ]
        });
    }
}
