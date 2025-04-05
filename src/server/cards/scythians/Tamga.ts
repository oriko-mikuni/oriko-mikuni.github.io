import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Tamga extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAMGA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SCY9",
            effectText: "Exhaust: discard a card to draw 2 cards.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {region}"
        });
    }

    public getVictoryPoints(player: Player): number {
        return Math.floor(player.suitCount(CardSuitIcon.REGION) / 2);
    }
}
