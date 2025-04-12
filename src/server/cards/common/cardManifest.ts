import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {KingOfKings} from "./KingOfKings";
import {GameModule} from "../../../common/cards/GameModule";
import {KingOfKingsB} from "./KingOfKingsB";
import {Unrest11} from "./Unrest11";
import {Unrest0} from "./Unrest0";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Unrest4} from "./Unrest4";
import {Unrest5} from "./Unrest5";
import {Unrest6} from "./Unrest6";
import {Unrest7} from "./Unrest7";
import {Unrest8} from "./Unrest8";
import {Unrest9} from "./Unrest9";
import {Unrest10} from "./Unrest10";
import {Barbarian0} from "./Barbarian0";
import {Empire0} from "./Empire0";
import {Barbarian1} from "./Barbarian1";
import {Empire1} from "./Empire1";
import {Barbarian2} from "./Barbarian2";
import {Empire2} from "./Empire2";
import {Barbarian3} from "./Barbarian3";
import {Empire3} from "./Empire3";

export const COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.COMMON,
    commonCards: {
        [CardName.KOK]: {Factory: KingOfKings},
        [CardName.KOK_B]: {Factory: KingOfKingsB},
        [CardName.UNREST0]: {Factory: Unrest0},
        [CardName.UNREST1]: {Factory: Unrest1},
        [CardName.UNREST2]: {Factory: Unrest2},
        [CardName.UNREST3]: {Factory: Unrest3},
        [CardName.UNREST4]: {Factory: Unrest4},
        [CardName.UNREST5]: {Factory: Unrest5},
        [CardName.UNREST6]: {Factory: Unrest6},
        [CardName.UNREST7]: {Factory: Unrest7},
        [CardName.UNREST8]: {Factory: Unrest8},
        [CardName.UNREST9]: {Factory: Unrest9},
        [CardName.UNREST10]: {Factory: Unrest10},
        [CardName.UNREST11]: {Factory: Unrest11},
        [CardName.BARBARIAN0]: {Factory: Barbarian0},
        [CardName.BARBARIAN1]: {Factory: Barbarian1},
        [CardName.BARBARIAN2]: {Factory: Barbarian2},
        [CardName.BARBARIAN3]: {Factory: Barbarian3},
        [CardName.EMPIRE0]: {Factory: Empire0},
        [CardName.EMPIRE1]: {Factory: Empire1},
        [CardName.EMPIRE2]: {Factory: Empire2},
        [CardName.EMPIRE3]: {Factory: Empire3},

    },
});
