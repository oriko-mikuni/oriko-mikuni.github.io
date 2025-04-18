import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class GwalchmeiSirGawain extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GWALCHMEI_SIR_GAWAIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ART,
            cardNumber: "ART14",
            effectText: [
                "Take {unrest} to gain 1{progress} per garrisoned {knight}.",
                CardEffectReuse.knightGarrison
            ]
        });
    }
}
