import { CardInPlayType } from "../../common/cards/CardInPlayType";
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

    canPlayAsAction: (player: Player) => boolean;
    canFreePlay: (player: Player) => boolean;
    play: (player: Player) => PlayerInput | undefined;

    victoryPoints?: VictoryPoints;
    getVictoryPoints: (player: Player) => number;
    cardInPlayType: CardInPlayType;

    // changes in game
    typeIconGainThisTurn?: Array<CardTypeIcon>;
    typeIconLoseThisTurn?: Array<CardTypeIcon>;
}
