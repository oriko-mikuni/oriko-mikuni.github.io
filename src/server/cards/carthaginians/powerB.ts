import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { Player } from "../../Player";
import { Card } from "../Card";
import { Units } from "../../../common/Units";
import { IPermanentCard } from "../IPermanentCard";
import { CardInPlayType } from "../../../common/cards/CardInPlayType";

export class CarthaginianPowerB extends Card implements IPermanentCard {
    constructor() {
        super({
            name: CardName.CARTHAGINIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            headerIcon: CardHeaderIcon.POWER_B,
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            victoryPoints: 'variable',
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.POWER
        });
    }

    // for each 1 progress you would place into market, place 1 material instead.
    public wouldPlaceResourceOnMarket(player: Player, resourceUnit: Units): Units {
        return Units.of({
            progress: 0,
            population: resourceUnit.population,
            goods: resourceUnit.goods,
            material: resourceUnit.progress * 2 + resourceUnit.material,
        });
    }

    public getVictoryPoints(player: Player): number {
        return Math.floor(player.material / 3);
    }
}