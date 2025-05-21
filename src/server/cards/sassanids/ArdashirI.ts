import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class ArdashirI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARDASHIR_I,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS24",
            effectText: [
                "Each other player takes a {unrest}.",
                "Choose: acquire a {region}/{civilised}/{trade-route} OR find a {knight} and add it to your hand.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.ASWARAN_CAVALRY,
                CardName.CLIBANARII
            ]
        });
    }
}
