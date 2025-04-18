import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Player} from "../../Player";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AlexandriaInAriana extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALEXANDRIA_IN_ARIANA,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC9",
            effectText: [
                CardEffectReuse.city
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.REGION, param.player.selectCards()) / 2);
    }
}
