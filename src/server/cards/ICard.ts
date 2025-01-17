import { CardName } from "../../common/cards/CardName";
import { CardSuitIcon } from "../../common/cards/CardSuitIcon";
import { CardTypeIcon } from "../../common/cards/CardTypeIcon";
import { VictoryPoints } from "../../common/cards/ClientCard";
import { Player } from "../Player";
import { PlayerInput } from "../PlayerInput";

export interface ICard {
    name: CardName;
    suit: Array<CardSuitIcon>;
    typeIcon: Array<CardTypeIcon>;
    play: (player: Player) => PlayerInput | undefined;
    victoryPoints?: VictoryPoints;
    getVictoryPoints: (player: Player) => number;
}

// card that have effect on solstice
export interface ISolsticeCard {
    solstice: (player: Player) => PlayerInput | undefined;
}
export function isISolsticeCard(object: any): object is ISolsticeCard {
    return object !== undefined && object.solstice !== undefined;
}

