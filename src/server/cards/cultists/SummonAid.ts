import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class SummonAid extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SUMMON_AID,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN, CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL19",
            effectText: [
                "Return a {unrest} to choose: gain 1{population} OR add a {progress} to your ceremony card OR garrison a card from your discard pile in a {region} you have in play."
            ],
        });
    }
}
