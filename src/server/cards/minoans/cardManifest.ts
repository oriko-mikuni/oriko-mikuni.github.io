import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Prosperity} from "./Prosperity";
import {MinoansPowerA} from "./MinoansPowerA";
import {MinoansPowerB} from "./MinoansPowerB";
import {KingMinos} from "./KingMinos";
import {MinoanTraders} from "./MinoanTraders";
import {DrainageSystem} from "./DrainageSystem";
import {Architecture} from "./Architecture";
import {Frescos} from "./Frescos";
import {Labyrinth} from "./Labyrinth";
import {MinoanExpansion} from "./MinoanExpansion";
import {SealStones} from "./SealStones";
import {Glory} from "./Glory";
import {Unrest} from "./Unrest";
import {WritingSystems} from "./WritingSystems";
import {Knossos} from "./Knossos";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Pottery} from "./Pottery";
import {Thera} from "./Thera";
import {Crete} from "./Crete";
import {Cyprus} from "./Cyprus";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {GameModule} from "../../../common/cards/GameModule";

export const MIN_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.MINOANS,
    nationCards: {
        [CardName.MINOANS_POWER_A]: {Factory: MinoansPowerA},
        [CardName.MINOANS_POWER_B]: {Factory: MinoansPowerB},
        [CardName.KING_MINOS]: {Factory: KingMinos},
        [CardName.MINOAN_TRADERS]: {Factory: MinoanTraders},
        [CardName.DRAINAGE_SYSTEM_MIN]: {Factory: DrainageSystem},
        [CardName.ARCHITECTURE]: {Factory: Architecture},
        [CardName.FRESCOS]: {Factory: Frescos},
        [CardName.LABYRINTH]: {Factory: Labyrinth},
        [CardName.MINOAN_EXPANSION]: {Factory: MinoanExpansion},
        [CardName.SEAL_STONES]: {Factory: SealStones},
        [CardName.GLORY_MIN]: {Factory: Glory},
        [CardName.UNREST_MIN_NATION]: {Factory: Unrest},
        [CardName.WRITING_SYSTEMS_MIN]: {Factory: WritingSystems},
        [CardName.KNOSSOS]: {Factory: Knossos},
        [CardName.ADVANCE_MIN]: {Factory: Advance},
        [CardName.CONQUER_MIN]: {Factory: Conquer},
        [CardName.POTTERY]: {Factory: Pottery},
        [CardName.THERA]: {Factory: Thera},
        [CardName.CRETE]: {Factory: Crete},
        [CardName.CYPRUS]: {Factory: Cyprus},
        [CardName.PROSPERITY_MIN]: {Factory: Prosperity},
        [CardName.UNREST_MIN]: {Factory: Unrest1},
        [CardName.UNREST_MIN1]: {Factory: Unrest2},
        [CardName.UNREST_MIN2]: {Factory: Unrest3},
    },
});
