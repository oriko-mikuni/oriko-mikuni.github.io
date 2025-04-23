import {CardName} from './CardName';
import {CardSuitIcon} from "./CardSuitIcon";
import {CardHeaderIcon} from "./CardHeaderIcon";
import {CardStateIcon} from "./CardStateIcon";
import {CardTypeIcon} from "./CardTypeIcon";
import {CardNationColour} from "./CardNationColour";
import {CardStartingLocation} from './CardStartingLocation';
import {CardExpansion} from './CardExpansion';
import {Units} from "../Units";
import {GameModule} from "./GameModule";

export type VictoryPoints = number | 'conditional' | 'variable' | 'negativeConditional';

export type ClientCard = {
  name: CardName;
  // first suit is also banner, unless it
  suit: Array<CardSuitIcon>;
  // 0, 1 or 2 state symbol
  stateSymbol: Array<CardStateIcon>;
  typeIcon: Array<CardTypeIcon>;
  headerIcon?: CardHeaderIcon;
  effectText: Array<string>;
  developmentCost?: Partial<Units>;
  developmentCostString: Array<string>;
  nationColour?: CardNationColour;
  startingLocation?: CardStartingLocation;
  playerCount?: number;
  expansion?: CardExpansion;
  cardNumber?: string;
  victoryPoints?: VictoryPoints;
  victoryPointsString?: string;
  gameModule: GameModule;
}
