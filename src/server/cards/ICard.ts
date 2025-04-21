import { CardInPlayType } from "../../common/cards/CardInPlayType";
import { CardName } from "../../common/cards/CardName";
import { CardSuitIcon } from "../../common/cards/CardSuitIcon";
import { CardTypeIcon } from "../../common/cards/CardTypeIcon";
import { VictoryPoints } from "../../common/cards/ClientCard";
import { Player } from "../Player";
import {CardExpansion} from "../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon";
import {CardNationColour} from "../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../common/cards/CardStartingLocation";
import {CardStateIcon} from "../../common/cards/CardStateIcon";
import {Units} from "../../common/Units";

export type GetVPParameter = {player: Player, location: string};

export interface ICard {
    name: CardName;
    suit: Array<CardSuitIcon>;
    stateSymbol: Array<CardStateIcon>;
    typeIcon: Array<CardTypeIcon>;
    cardNumber?: string;
    effectText?: Array<string>;
    developmentCost?: Partial<Units>;
    expansion?: CardExpansion;
    headerIcon?: CardHeaderIcon;
    nationColour?: CardNationColour;
    playerCount?: number;
    startingLocation?: CardStartingLocation;

    canPlayAsAction: (player: Player) => boolean;
    canFreePlay: (player: Player) => boolean;
    // play: (player: Player) => PlayerInput | undefined;

    victoryPoints?: VictoryPoints;
    victoryPointsString?: string;
    getVictoryPoints: (param: GetVPParameter) => number;
    getConditionalVictoryPoints: (param: GetVPParameter) => number;
    getVariableVictoryPoints: (param: GetVPParameter) => number;
    cardInPlayType?: CardInPlayType;

    // changes in game
    typeIconGainThisTurn?: Array<CardTypeIcon>;
    typeIconLoseThisTurn?: Array<CardTypeIcon>;
}
