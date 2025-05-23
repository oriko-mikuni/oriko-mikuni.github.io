import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_QIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN12",
            effectText: CardEffectReuse.glory,
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
