import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {InuitPowerA} from "./InuitPowerA";
import {InuitPowerB} from "./InuitPowerB";
import {Nunavut} from "./Nunavut";
import {SikuSeaIce} from "./SikuSeaIce";
import {Nunatsiavut} from "./Nunatsiavut";
import {KalaallitNunaat} from "./KalaallitNunaat";
import {Advance} from "./Advance";
import {Iglu} from "./Iglu";
import {Qarmaq} from "./Qarmaq";
import {DogSleds} from "./DogSleds";
import {Harpoons} from "./Harpoons";
import {Nunavik} from "./Nunavik";
import {ImaqArcticSea} from "./ImaqArcticSea";
import {OralHistory} from "./OralHistory";
import {Exploration} from "./Exploration";
import {Kayaks} from "./Kayaks";
import {TattoosInu} from "./TattoosInu";
import {AngakkuqShaman} from "./AngakkuqShaman";
import {QulliqOilLamp} from "./QulliqOilLamp";
import {ThroatSinging} from "./ThroatSinging";
import {Inuksuk} from "./Inuksuk";
import {BoneCarving} from "./BoneCarving";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Summer} from "./Summer";
import {Winter} from "./Winter";

export const INU_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.INUIT,
    nationCards: {
        [CardName.INUIT_POWER_A]: {Factory: InuitPowerA},
        [CardName.INUIT_POWER_B]: {Factory: InuitPowerB},
        [CardName.NUNAVUT]: {Factory: Nunavut},
        [CardName.SIKU_SEA_ICE]: {Factory: SikuSeaIce},
        [CardName.NUNATSIAVUT]: {Factory: Nunatsiavut},
        [CardName.KALAALLIT_NUNAAT]: {Factory: KalaallitNunaat},
        [CardName.ADVANCE_INU]: {Factory: Advance},
        [CardName.IGLU]: {Factory: Iglu},
        [CardName.QARMAQ]: {Factory: Qarmaq},
        [CardName.DOG_SLEDS]: {Factory: DogSleds},
        [CardName.HARPOONS]: {Factory: Harpoons},
        [CardName.NUNAVIK]: {Factory: Nunavik},
        [CardName.IMAQ_ARCTIC_SEA]: {Factory: ImaqArcticSea},
        [CardName.ORAL_HISTORY]: {Factory: OralHistory},
        [CardName.EXPLORATION]: {Factory: Exploration},
        [CardName.KAYAKS]: {Factory: Kayaks},
        [CardName.TATTOOS_INU]: {Factory: TattoosInu},
        [CardName.ANGAKKUQ_SHAMAN]: {Factory: AngakkuqShaman},
        [CardName.QULLIQ_OIL_LAMP]: {Factory: QulliqOilLamp},
        [CardName.THROAT_SINGING]: {Factory: ThroatSinging},
        [CardName.INUKSUK]: {Factory: Inuksuk},
        [CardName.BONE_CARVING]: {Factory: BoneCarving},
        [CardName.UNREST_INU_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_INU_SUPPLY_1]: {Factory: Unrest1},
        [CardName.UNREST_INU_SUPPLY3]: {Factory: Unrest2},
        [CardName.SUMMER_INU]: {Factory: Summer},
        [CardName.WINTER_INU]: {Factory: Winter},
    },
});
