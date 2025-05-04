import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class AncientAstronauts extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ANCIENT_ASTRONAUTS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT18",
            effectText: [
                "All players MAY draw a card.",
                "Choose: convert 1{progress} into 1{population} per {region} you have in play OR gain 1{goods} for each of these icons you have at least 1 of in play: {river}, {fertile}, {ocean}, {hunt}."
            ],
        });
    }
}
