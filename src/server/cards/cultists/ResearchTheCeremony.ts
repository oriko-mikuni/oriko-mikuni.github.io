import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ResearchTheCeremony extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RESEARCH_THE_CEREMONY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "CUL2A",
            effectText: [
                "Exhaust: move 1 of your {progress} here.",
                "Solstice: choose: remove all {progress} (minimum 5) on this card to flip it OR take a {unrest} to add 1{progress} to this card."
            ],
        });
    }
}
