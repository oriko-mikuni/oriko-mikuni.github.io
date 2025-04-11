import {CardName} from './CardName';
import {CardSuitIcon} from "./CardSuitIcon";
import {CardHeaderIcon} from "./CardHeaderIcon";
import {CardStateSymbol} from "./CardStateSymbol";
import {CardTypeIcon} from "./CardTypeIcon";
import {CardNationColour} from "./CardNationColour";
import {CardStartingLocation} from './CardStartingLocation';
import {CardExpansion} from './CardExpansion';
import {Units} from "../Units";
import {GameModule} from "./GameModule";

export type VictoryPoints = number | 'conditional' | 'variable' | 'negativeConditional';

export type ClientCard = {
  name: CardName;
  suit: Array<CardSuitIcon>; // first suit is also banner, unless it
  stateSymbol: Array<CardStateSymbol>; // 0, 1 or 2 state symbol
  typeIcon: Array<CardTypeIcon>;
  headerIcon?: CardHeaderIcon;
  effectText?: string;
  developmentCost?: Partial<Units>;
  nationColour?: CardNationColour;
  startingLocation?: CardStartingLocation;
  playerCount?: number;
  expansion?: CardExpansion;
  cardNumber?: string;
  victoryPoints?: VictoryPoints;
  victoryPointsString?: string;
  gameModule: GameModule;
}
