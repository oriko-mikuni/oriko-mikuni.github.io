import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Nunavik extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NUNAVIK,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU11",
            effectText: [
                CardEffectReuse.garrisonACard,
                "Exhaust: if {barbarian}, pay 1{material} to free play [Angakkuq (Shaman)]."
            ],
            developmentCost: {material: 1},
            victoryPoints: 1,
        });
    }
}
