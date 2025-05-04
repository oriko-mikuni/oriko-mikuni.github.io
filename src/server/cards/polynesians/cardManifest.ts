import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {PolynesiansPowerA} from "./PolynesiansPowerA";
import {PolynesiansPowerB} from "./PolynesiansPowerB";
import {Mana} from "./Mana";
import {Kupe} from "./Kupe";
import {AotearoaNewZealand} from "./AotearoaNewZealand";
import {RapaNuiEasterIsland} from "./RapaNuiEasterIsland";
import {Hawaii} from "./Hawaii";
import {Rarotonga} from "./Rarotonga";
import {Wayfinding} from "./Wayfinding";
import {Tattoos} from "./Tattoos";
import {WakaTauaWarCanoes} from "./WakaTauaWarCanoes";
import {Haka} from "./Haka";
import {Tohunga} from "./Tohunga";
import {Nafanua} from "./Nafanua";
import {TutuTeAroaro} from "./TutuTeAroaro";
import {KumaraSweetPotato} from "./KumaraSweetPotato";
import {Tahiti} from "./Tahiti";
import {Overpopulation} from "./Overpopulation";
import {WakaHouruaLargeCanoes} from "./WakaHouruaLargeCanoes";
import {Explorers} from "./Explorers";
import {Tutuila} from "./Tutuila";
import {SavaiI} from "./SavaiI";
import {Outriggers} from "./Outriggers";
import {Whakapapa} from "./Whakapapa";
import {Advance} from "./Advance";
import {IslanderProsperity} from "./IslanderProsperity";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {IsleBound} from "./IsleBound";
import {Voyaging} from "./Voyaging";

export const POL_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.POLYNESIANS,
    nationCards: {
        [CardName.POLYNESIANS_POWER_A]: {Factory: PolynesiansPowerA},
        [CardName.POLYNESIANS_POWER_B]: {Factory: PolynesiansPowerB},
        [CardName.MANA]: {Factory: Mana},
        [CardName.KUPE]: {Factory: Kupe},
        [CardName.AOTEAROA_NEW_ZEALAND]: {Factory: AotearoaNewZealand},
        [CardName.RAPA_NUI_EASTER_ISLAND]: {Factory: RapaNuiEasterIsland},
        [CardName.HAWAII]: {Factory: Hawaii},
        [CardName.RAROTONGA]: {Factory: Rarotonga},
        [CardName.WAYFINDING]: {Factory: Wayfinding},
        [CardName.TATTOOS_POL]: {Factory: Tattoos},
        [CardName.WAKA_TAUA_WAR_CANOES]: {Factory: WakaTauaWarCanoes},
        [CardName.HAKA]: {Factory: Haka},
        [CardName.TOHUNGA]: {Factory: Tohunga},
        [CardName.NAFANUA]: {Factory: Nafanua},
        [CardName.TUTU_TE_AROARO]: {Factory: TutuTeAroaro},
        [CardName.KUMARA_SWEET_POTATO]: {Factory: KumaraSweetPotato},
        [CardName.TAHITI]: {Factory: Tahiti},
        [CardName.OVERPOPULATION]: {Factory: Overpopulation},
        [CardName.WAKA_HOURUA_LARGE_CANOES]: {Factory: WakaHouruaLargeCanoes},
        [CardName.EXPLORERS]: {Factory: Explorers},
        [CardName.TUTUILA]: {Factory: Tutuila},
        [CardName.SAVAI_I]: {Factory: SavaiI},
        [CardName.OUTRIGGERS]: {Factory: Outriggers},
        [CardName.WHAKAPAPA]: {Factory: Whakapapa},
        [CardName.ADVANCE_POL]: {Factory: Advance},
        [CardName.ISLANDER_PROSPERITY]: {Factory: IslanderProsperity},
        [CardName.UNREST_POL]: {Factory: Unrest},
        [CardName.UNREST_POL_SUPPLY]: {Factory: Unrest1},
        [CardName.UNREST_POL_SUPPLY3]: {Factory: Unrest2},
        [CardName.ISLE_BOUND]: {Factory: IsleBound},
        [CardName.VOYAGING]: {Factory: Voyaging},
    },
});
