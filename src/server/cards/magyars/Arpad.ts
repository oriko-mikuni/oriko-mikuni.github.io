import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Arpad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARPAD,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG9",
            effectText: [
                "Cannot be played unless [Almos] is in your history.",
                "Acquire a " + CardEffectReuse.fourSuits + ".",
                "All players abandon a {region} with garrisoned card(s). Those that cannot must take a {unrest}.",
                CardEffectReuse.selfHistory
            ],
            relatedCards: [
                CardName.ALMOS
            ]
        });
    }
}
