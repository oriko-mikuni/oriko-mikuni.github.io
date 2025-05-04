import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class SwordOfPower extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SWORD_OF_POWER,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT21",
            effectText: [
                "Choose: discard the top card of your Nation deck to acquire a " + CardEffectReuse.fourSuits + " OR discard a {gadget} to break through for a matching suited card."
            ],
        });
    }
}
