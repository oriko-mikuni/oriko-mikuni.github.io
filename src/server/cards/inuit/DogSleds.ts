import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation, Player} from "../../Player";

export class DogSleds extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DOG_SLEDS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU9",
            effectText: [
                "Passive: when you play a {region} without {ocean}, you MAY choose: draw a card OR discard a card to gain 1{progress}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {production} in play",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.PRODUCTION,
            param.player.selectCards(card => isInPlayLocation(card.location))
        );
    }
}
