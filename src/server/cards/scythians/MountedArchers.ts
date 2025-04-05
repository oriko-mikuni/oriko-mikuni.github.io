import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class MountedArchers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOUNTED_ARCHERS_SCY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SCY20",
            effectText: cardEffectReuse.mountedArchers + "\n" +
                "Solstice: you MAY pay 1{material} to gain 1{population}.",
        });
    }
}
