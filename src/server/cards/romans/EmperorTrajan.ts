import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";

export class EmperorTrajan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_TRAJAN,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM8",
            effectText: "Acquire " + cardEffectReuse.FOUR_SUITS + ".\n" +
                cardEffectReuse.SELF_HISTORY,
            developmentCost: "{material}x2 {population}x1",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{population}"
        });
    }

    public getVictoryPoints(player: Player): number {
        return player.population / 3;
    }
}
