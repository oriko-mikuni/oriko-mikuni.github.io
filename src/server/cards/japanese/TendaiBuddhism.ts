import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class TendaiBuddhism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TENDAI_BUDDHISM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.JPN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "JPN10",
            effectText: [
                "Exhaust: pay 2{material} and discard a card to free play a {region}.",
                "Solstice: if {barbarian}, choose: abandon [Shinto] OR discard a card.",
                "If {empire}, you MAY pay 1{population} to return a {unrest}."
            ],
            relatedCards: [
                CardName.SHINTO
            ]
        });
    }
}
