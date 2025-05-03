import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {MayansPowerA} from "./MayansPowerA";
import {MayansPowerB} from "./MayansPowerB";
import {KingKInichJanaabPakal} from "./KingKInichJanaabPakal";
import {CodicesAndProphecies} from "./CodicesAndProphecies";
import {PopolVuh} from "./PopolVuh";
import {TurquoiseMask} from "./TurquoiseMask";
import {MayanTraders} from "./MayanTraders";
import {ChichenItza} from "./ChichenItza";
import {Headpiece} from "./Headpiece";
import {Headpiece1} from "./Headpiece1";
import {Headpiece2} from "./Headpiece2";
import {FineFeatherwork} from "./FineFeatherwork";
import {StoneMask} from "./StoneMask";
import {MayanWriting} from "./MayanWriting";
import {Palenque} from "./Palenque";
import {Patolli} from "./Patolli";
import {Tikal} from "./Tikal";
import {AdvancedMathematics} from "./AdvancedMathematics";
import {Unrest} from "./Unrest";
import {PokTaPok} from "./PokTaPok";
import {Unrest1} from "./Unrest1";
import {Caracol} from "./Caracol";
import {RoadNetworks} from "./RoadNetworks";
import {StoneMask1} from "./StoneMask1";
import {StoneMask2} from "./StoneMask2";
import {StoneMask3} from "./StoneMask3";
import {Chultuns} from "./Chultuns";
import {HalachUinic} from "./HalachUinic";
import {Unrest2} from "./Unrest2";

export const MAY_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.MAYANS,
    nationCards: {
        [CardName.MAYANS_POWER_A]: {Factory: MayansPowerA},
        [CardName.MAYANS_POWER_B]: {Factory: MayansPowerB},
        [CardName.KING_K_INICH_JANAAB_PAKAL]: {Factory: KingKInichJanaabPakal},
        [CardName.CODICES_AND_PROPHECIES]: {Factory: CodicesAndProphecies},
        [CardName.POPOL_VUH]: {Factory: PopolVuh},
        [CardName.TURQUOISE_MASK]: {Factory: TurquoiseMask},
        [CardName.MAYAN_TRADERS]: {Factory: MayanTraders},
        [CardName.CHICHEN_ITZA]: {Factory: ChichenItza},
        [CardName.HEADPIECE]: {Factory: Headpiece},
        [CardName.HEADPIECE1]: {Factory: Headpiece1},
        [CardName.HEADPIECE2]: {Factory: Headpiece2},
        [CardName.FINE_FEATHERWORK]: {Factory: FineFeatherwork},
        [CardName.STONE_MASK_MAY]: {Factory: StoneMask},
        [CardName.MAYAN_WRITING]: {Factory: MayanWriting},
        [CardName.PALENQUE]: {Factory: Palenque},
        [CardName.PATOLLI]: {Factory: Patolli},
        [CardName.TIKAL]: {Factory: Tikal},
        [CardName.ADVANCED_MATHEMATICS_MAY]: {Factory: AdvancedMathematics},
        [CardName.UNREST_MAY]: {Factory: Unrest},
        [CardName.POK_TA_POK]: {Factory: PokTaPok},
        [CardName.UNREST_MAY1]: {Factory: Unrest1},
        [CardName.CARACOL]: {Factory: Caracol},
        [CardName.ROAD_NETWORKS]: {Factory: RoadNetworks},
        [CardName.STONE_MASK_MAY1]: {Factory: StoneMask1},
        [CardName.STONE_MASK_MAY2]: {Factory: StoneMask2},
        [CardName.STONE_MASK_MAY3]: {Factory: StoneMask3},
        [CardName.CHULTUNS]: {Factory: Chultuns},
        [CardName.HALACH_UINIC]: {Factory: HalachUinic},
        [CardName.UNREST_MAY_SUPPLY]: {Factory: Unrest2},
    },
});
