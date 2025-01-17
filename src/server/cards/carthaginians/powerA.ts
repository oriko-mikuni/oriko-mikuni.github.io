import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { Resources } from "../../../common/Resources";
import { Player } from "../../Player";
import { Card } from "../Card";
import { ICard } from "../ICard";
import { Units } from "../../../common/Units";
import { VictoryPoints } from "../../../common/cards/ClientCard";

export class CarthaginianPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTHAGINIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            headerIcon: CardHeaderIcon.POWER_A,
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            victoryPoints: 'variable',
            nationColour: CardNationColour.CAR,
        });
    }

    // for each 1 progress you would place into market, place 1 material instead.
    public resourceWouldPlaceOnMarket(player: Player, resourceUnit: Units): Units {
        return Units.of({
            progress: 0,
            population: resourceUnit.population,
            goods: resourceUnit.goods,
            material: resourceUnit.progress + resourceUnit.material,
        });
    }

    public getVictoryPoints(player: Player): number {
        return Math.floor(player.material / 6);
    }
}