import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {isInPlayLocation} from "../../Player";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class PermanentSettlement extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERMANENT_SETTLEMENT,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT3",
            effectText: [
                "Pay 3{goods} and put a {region} (not a {gadget}) you have in play into your history to take the top {fame} card and gain 1{progress}."
            ],
            developmentCost: {population: 3},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {pinned} in play",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(card =>
            isInPlayLocation(card.location) &&
            card.card.headerIcon === CardHeaderIcon.PINNED
        ).length / 3);
    }
}
