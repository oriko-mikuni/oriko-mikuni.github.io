import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class PalaceOfPoseidon extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PALACE_OF_POSEIDON,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL3",
            effectText: [
                "Can only be played if [Mountain of Atlantis] is in play. Free play.",
                cardEffectReuse.increaseHandSize1,
                "If [Mountain of Atlantis] leaves play, sink this card."
            ],
            developmentCost: {progress: 1, material: 3, population: 2},
            victoryPoints: 5,
        });
    }
}
