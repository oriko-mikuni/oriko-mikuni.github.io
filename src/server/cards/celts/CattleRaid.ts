import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class CattleRaid extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CATTLE_RAID,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL19",
            effectText: [
                "Gain 2{material}. Steal 1{material} from each player with at least one {region} in play.",
                "Steal 1{progress} from each {empire} player."
            ],
        });
    }
}
