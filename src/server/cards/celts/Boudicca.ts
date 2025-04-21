import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Boudicca extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BOUDICCA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL18",
            effectText: [
                "Gain 1{progress}.",
                "Each other player abandons a {region}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
