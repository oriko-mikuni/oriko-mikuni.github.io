import { CardInPlayType } from "../../common/cards/CardInPlayType";
import { CardName } from "../../common/cards/CardName";
import { CardSuitIcon } from "../../common/cards/CardSuitIcon";
import { CardTypeIcon } from "../../common/cards/CardTypeIcon";
import { VictoryPoints } from "../../common/cards/ClientCard";
import { Player, PlayerCardLocation } from "../Player";
import {CardExpansion} from "../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon";
import {CardNationColour} from "../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../common/cards/CardStartingLocation";
import {CardStateIcon} from "../../common/cards/CardStateIcon";
import {Units} from "../../common/Units";
import {GameModule} from "../../common/cards/GameModule";
import {KeywordNames} from "../../common/keywords";

export type GetVPParameter = {player: Player, location: PlayerCardLocation | ICard, scoringResources: Units};

export interface ICard {
    name: CardName;
    suit: Array<CardSuitIcon>;
    stateSymbol: Array<CardStateIcon>;
    typeIcon: Array<CardTypeIcon>;
    cardNumber?: string;
    effectText?: Array<string>;
    developmentCost?: Partial<Units>;
    developmentCostString?: Array<string>;
    expansion?: CardExpansion;
    headerIcon?: CardHeaderIcon;
    nationColour?: CardNationColour;
    playerCount?: number;
    startingLocation?: CardStartingLocation;
    gameModule?: GameModule;
    keywords?: Array<KeywordNames>;
    cardInPlayType?: CardInPlayType;

    canPlayAsAction: (player: Player) => boolean;
    canFreePlay: (player: Player) => boolean;
    // play: (player: Player) => PlayerInput | undefined;

    victoryPoints?: VictoryPoints;
    victoryPointsString?: string;
    getVictoryPoints: (param: GetVPParameter) => number;
    getConditionalVictoryPoints: (param: GetVPParameter) => number;
    getVariableVictoryPoints: (param: GetVPParameter) => number;
}
