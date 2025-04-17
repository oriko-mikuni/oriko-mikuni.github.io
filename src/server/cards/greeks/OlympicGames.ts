import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class OlympicGames extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLYMPIC_GAMES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE2",
            effectText: [
                "Draw 2 cards. Put a card from your hand into your history."
            ],
        });
    }
}
