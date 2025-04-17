import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class SchollOfDiplomacy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCHOOL_OF_DIPLOMACY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN17",
            effectText: [
                "Abandon up to 3 {region}. For each {region} abandoned, you MAY acquire {region}/{tributary}.",
                "If {barbarian}, all other players recall a {region}."
            ],
        });
    }
}
