import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Location} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Mathematics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MATHEMATICS_MAU,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU3",
            effectText: "Passive: increase hand size by 1.\n" +
                "Your [Advance] Cards lose the {barbarian} icon.",
            developmentCost: {material: 4, population: 1},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {pinned}\n" +
                "in play,\n" +
                "excluding {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card =>
            card.location === Location.IN_PLAY &&
            !card.card.suit.some(suit1 => suit1 === CardSuitIcon.REGION)
        ).length;
    }
}
