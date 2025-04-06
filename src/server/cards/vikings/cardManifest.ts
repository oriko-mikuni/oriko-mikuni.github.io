import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest4} from "./Unrest4";
import {VikingsPowerA} from "./VikingsPowerA";
import {VikingsPowerB} from "./VikingsPowerB";
import {HaraldHardrada} from "./HaraldHardrada";
import {Iceland} from "./Iceland";
import {Combs} from "./Combs";
import {Graenland} from "./Graenland";
import {Foroyar} from "./Foroyar";
import {Vinland} from "./Vinland";
import {Sagas} from "./Sagas";
import {CityOfDubhLinn} from "./CityOfDubhLinn";
import {Longships} from "./Longships";
import {Skis} from "./Skis";
import {RolloTheWalker} from "./RolloTheWalker";
import {GoAViking} from "./GoAViking";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Gothja} from "./Gothja";
import {Scandinavia} from "./Scandinavia";
import {Advance} from "./Advance";
import {Prosperity} from "./Prosperity";
import {Glory} from "./Glory";
import {ErikTheRed} from "./ErikTheRed";
import {Jomsviking} from "./Jomsviking";
import {Althing} from "./Althing";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";

export const VIK_CARD_MANIFEST = new ModuleManifest({
    module: 'Vikings',
    nationCards: {
        [CardName.VIKINGS_POWER_A]: {Factory: VikingsPowerA},
        [CardName.VIKINGS_POWER_B]: {Factory: VikingsPowerB},
        [CardName.HARALD_HARDRADA]: {Factory: HaraldHardrada},
        [CardName.ICELAND]: {Factory: Iceland},
        [CardName.COMBS]: {Factory: Combs},
        [CardName.GRAENLAND]: {Factory: Graenland},
        [CardName.FOROYAR]: {Factory: Foroyar},
        [CardName.VINLAND]: {Factory: Vinland},
        [CardName.SAGAS]: {Factory: Sagas},
        [CardName.CITY_OF_DUBH_LINN]: {Factory: CityOfDubhLinn},
        [CardName.LONGSHIPS]: {Factory: Longships},
        [CardName.SKIS]: {Factory: Skis},
        [CardName.ROLLO_THE_WALKER]: {Factory: RolloTheWalker},
        [CardName.GO_A_VIKING]: {Factory: GoAViking},
        [CardName.UNREST_VIK_NATION]: {Factory: Unrest},
        [CardName.UNREST_VIK_NATION1]: {Factory: Unrest1},
        [CardName.GOTHJA]: {Factory: Gothja},
        [CardName.SCANDINAVIA]: {Factory: Scandinavia},
        [CardName.ADVANCE_VIK]: {Factory: Advance},
        [CardName.PROSPERITY_VIK]: {Factory: Prosperity},
        [CardName.GLORY_VIK]: {Factory: Glory},
        [CardName.ERIK_THE_RED]: {Factory: ErikTheRed},
        [CardName.JOMSVIKING]: {Factory: Jomsviking},
        [CardName.ALTHING]: {Factory: Althing},
        [CardName.UNREST_VIK]: {Factory: Unrest2},
        [CardName.UNREST_VIK1]: {Factory: Unrest3},
        [CardName.UNREST_VIK2]: {Factory: Unrest4},
    },
});
