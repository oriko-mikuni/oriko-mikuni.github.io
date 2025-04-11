import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {ScythiansPowerA} from "./ScythiansPowerA";
import {ScythiansPowerB} from "./ScythiansPowerB";
import {Glory} from "./Glory";
import {Ateas} from "./Ateas";
import {Kurgans} from "./Kurgans";
import {CityOfGelonus} from "./CityOfGelonus";
import {Jewellery} from "./Jewellery";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Tamga} from "./Tamga";
import {PonticSteppe} from "./PonticSteppe";
import {TarimBasin} from "./TarimBasin";
import {Caucasia} from "./Caucasia";
import {Raiders} from "./Raiders";
import {Nomads} from "./Nomads";
import {NomadsB} from "./NomadsB";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {CarpathianMountain} from "./CarpathianMountain";
import {TianShan} from "./TianShan";
import {MountedArchers} from "./MountedArchers";
import {Tents} from "./Tents";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Unrest4} from "./Unrest4";
import {GameModule} from "../../../common/cards/GameModule";

export const SCY_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.SCYTHIANS,
    nationCards: {
        [CardName.SCYTHIANS_POWER_A] : {Factory: ScythiansPowerA},
        [CardName.SCYTHIANS_POWER_B] : {Factory: ScythiansPowerB},
        [CardName.GLORY_SCY] : {Factory: Glory},
        [CardName.ATEAS] : {Factory: Ateas},
        [CardName.KURGANS] : {Factory: Kurgans},
        [CardName.CITY_OF_GELONUS] : {Factory: CityOfGelonus},
        [CardName.JEWELLERY] : {Factory: Jewellery},
        [CardName.UNREST_SCY_NATION] : {Factory: Unrest},
        [CardName.UNREST_SCY_NATION1] : {Factory: Unrest1},
        [CardName.TAMGA] : {Factory: Tamga},
        [CardName.PONTIC_STEPPE] : {Factory: PonticSteppe},
        [CardName.TARIM_BASIN] : {Factory: TarimBasin},
        [CardName.CAUCASIA] : {Factory: Caucasia},
        [CardName.RAIDERS] : {Factory: Raiders},
        [CardName.NOMADS] : {Factory: Nomads},
        [CardName.NOMADS_B] : {Factory: NomadsB},
        [CardName.ADVANCE_SCY] : {Factory: Advance},
        [CardName.CONQUER_SCY] : {Factory: Conquer},
        [CardName.CARPATHIAN_MOUNTAINS] : {Factory: CarpathianMountain},
        [CardName.TIAN_SHAN] : {Factory: TianShan},
        [CardName.MOUNTED_ARCHERS_SCY] : {Factory: MountedArchers},
        [CardName.TENTS] : {Factory: Tents},
        [CardName.UNREST_SCY] : {Factory: Unrest2},
        [CardName.UNREST_SCY1] : {Factory: Unrest3},
        [CardName.UNREST_SCY2] : {Factory: Unrest4},
    }
});
