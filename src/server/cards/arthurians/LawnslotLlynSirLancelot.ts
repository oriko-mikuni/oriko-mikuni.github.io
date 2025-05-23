import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class LawnslotLlynSirLancelot extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LAWNSLOT_LLYN_SIR_LANCELOT,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardNumber: "ART4",
            effectText: [
                "Find [Guennuvar] and put it into your history.",
                CardEffectReuse.takeTopFame,
                CardEffectReuse.selfExile
            ],
            victoryPoints: 2,
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.GUENNUVAR
            ]
        });
    }
}
