import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";

export class CityOfCarthage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_CARTHAGE_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN, CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR2X",
            effectText: [
                CardEffectReuse.harbourCity
            ],
            gameModule: GameModule.CARTHAGINIANS
        });
    }
}
