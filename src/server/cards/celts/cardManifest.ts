import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {CeltsPowerA} from "./CeltsPowerA";
import {CeltsPowerB} from "./CeltsPowerB";
import {CelticGold} from "./CelticGold";
import {CelticInnovation} from "./CelticInnovation";
import {Chainmail} from "./Chainmail";
import {Chariots} from "./Chariots";
import {OghamScript} from "./OghamScript";
import {Vercingetorix} from "./Vercingetorix";
import {Armorica} from "./Armorica";
import {Conquer} from "./Conquer";
import {Belgica} from "./Belgica";
import {Britannia} from "./Britannia";
import {Hibernia} from "./Hibernia";
import {Unrest} from "./Unrest";
import {Druids} from "./Druids";
import {Glory} from "./Glory";
import {Advance} from "./Advance";
import {Conquer1} from "./Conquer1";
import {Boudicca} from "./Boudicca";
import {CattleRaid} from "./CattleRaid";
import {CauldronOfCerridwen} from "./CauldronOfCerridwen";
import {Celtica} from "./Celtica";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Unrest4} from "./Unrest4";
import {Unrest5} from "./Unrest5";
import {Unrest6} from "./Unrest6";
import {Unrest7} from "./Unrest7";

export const CEL_CARD_MANIFEST = new ModuleManifest({
    module: 'Celts',
    nationCards: {
        [CardName.CELTS_POWER_A]: {Factory: CeltsPowerA},
        [CardName.CELTS_POWER_B]: {Factory: CeltsPowerB},
        [CardName.CELTIC_GOLD]: {Factory: CelticGold},
        [CardName.CELTIC_INNOVATION]: {Factory: CelticInnovation},
        [CardName.CHAINMAIL]: {Factory: Chainmail},
        [CardName.CHARIOTS]: {Factory: Chariots},
        [CardName.OGHAM_SCRIPT]: {Factory: OghamScript},
        [CardName.VERCINGETORIX]: {Factory: Vercingetorix},
        [CardName.CONQUER_CEL]: {Factory: Conquer},
        [CardName.ARMORICA]: {Factory: Armorica},
        [CardName.BELGICA]: {Factory: Belgica},
        [CardName.BRITANNIA]: {Factory: Britannia},
        [CardName.HIBERNIA]: {Factory: Hibernia},
        [CardName.UNREST_CEL_NATION]: {Factory: Unrest},
        [CardName.DRUIDS]: {Factory: Druids},
        [CardName.GLORY_CEL]: {Factory: Glory},
        [CardName.ADVANCE_CEL]: {Factory: Advance},
        [CardName.CONQUER_CEL1]: {Factory: Conquer1},
        [CardName.BOUDICCA]: {Factory: Boudicca},
        [CardName.CATTLE_RAID]: {Factory: CattleRaid},
        [CardName.CAULDRON_OF_CERRIDWEN]: {Factory: CauldronOfCerridwen},
        [CardName.CELTICA]: {Factory: Celtica},
        [CardName.UNREST_CEL]: {Factory: Unrest1},
        [CardName.UNREST_CEL1]: {Factory: Unrest2},
        [CardName.UNREST_CEL_SUPPLY3]: {Factory: Unrest3},
        [CardName.UNREST_CEL_SUPPLY3_1]: {Factory: Unrest4},
        [CardName.UNREST_CEL_SUPPLY4]: {Factory: Unrest5},
        [CardName.UNREST_CEL_SUPPLY4_1]: {Factory: Unrest6},
        [CardName.UNREST_CEL_SUPPLY4_2]: {Factory: Unrest7},
    },
});
