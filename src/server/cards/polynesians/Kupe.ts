import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {isInPlayLocation, Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class Kupe extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KUPE,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL3",
            effectText: [
                "Develop, then draw the developed card from your discard pile.",
                "Find [Overpopulation] (including from in play) and exile it.",
                "Flip your state card.",
                "Put this card into legends."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {ocean} in play",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.OCEAN,
            param.player.selectCards(card => isInPlayLocation(card.location))
        ) / 2);
    }
}
