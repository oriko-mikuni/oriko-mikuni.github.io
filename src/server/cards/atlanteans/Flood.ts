import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Flood extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FLOOD,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL12",
            effectText: [
                "Sink this card and a {region} in play to acquire " + CardEffectReuse.fourSuits + "."
            ],
        });
    }
}
