import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation, Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class Inuksuk extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INUKSUK,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU20",
            effectText: [
                "Exhaust: spend 1 action to find a {region} and free play it (ignoring {empire}/{barbarian}).",
                "If {empire}, and the played {region} has {hunt}, gain 1{progress}."
            ],
            developmentCost: {material: 4},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {hunt} in play",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.HUNT,
            param.player.selectCards(card => isInPlayLocation(card.location))
        );
    }
}
