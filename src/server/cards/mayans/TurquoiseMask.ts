import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class TurquoiseMask extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TURQUOISE_MASK,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.MASK],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY5",
            effectText: [
                "Choose: gain 1{goods} per {city}/{metropolis} you have in play OR draw up to 3 cards from your deck and/or discard pile."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 'conditional',
            victoryPointsString: "4VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 4 : 0;
    }
}
