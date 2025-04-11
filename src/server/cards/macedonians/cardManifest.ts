import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {MacedoniansPowerA} from "./MacedoniansPowerA";
import {MacedoniansPowerB} from "./MacedoniansPowerB";
import {Alexander} from "./Alexander";
import {Development} from "./Development";
import {Parmenion} from "./Parmenion";
import {CompanionCavalry} from "./CompanionCavalry";
import {AlexanderTheGreat} from "./AlexanderTheGreat";
import {Mosaics} from "./Mosaics";
import {AlexandriaInEgypt} from "./AlexandriaInEgypt";
import {AlexandriaInAriana} from "./AlexandriaInAriana";
import {Prosperity} from "./Prosperity";
import {Uxians} from "./Uxians";
import {Glory} from "./Glory";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Conquer1} from "./Conquer1";
import {PhilipII} from "./PhilipII";
import {Phalanx} from "./Phalanx";
import {HaliacmonValley} from "./HaliacmonValley";
import {Orestis} from "./Orestis";
import {Pelagonia} from "./Pelagonia";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {GameModule} from "../../../common/cards/GameModule";

export const MAC_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.MACEDONIANS,
    nationCards: {
        [CardName.MACEDONIANS_POWER_A]: {Factory: MacedoniansPowerA},
        [CardName.MACEDONIANS_POWER_B]: {Factory: MacedoniansPowerB},
        [CardName.ALEXANDER]: {Factory: Alexander},
        [CardName.DEVELOPMENT_MAC]: {Factory: Development},
        [CardName.PARMENION]: {Factory: Parmenion},
        [CardName.COMPANION_CAVALRY]: {Factory: CompanionCavalry},
        [CardName.ALEXANDER_THE_GREAT]: {Factory: AlexanderTheGreat},
        [CardName.MOSAICS]: {Factory: Mosaics},
        [CardName.ALEXANDRIA_IN_EGYPT]: {Factory: AlexandriaInEgypt},
        [CardName.ALEXANDRIA_IN_ARIANA]: {Factory: AlexandriaInAriana},
        [CardName.PROSPERITY_MAC]: {Factory: Prosperity},
        [CardName.UXIANS]: {Factory: Uxians},
        [CardName.GLORY_MAC]: {Factory: Glory},
        [CardName.ADVANCE_MAC]: {Factory: Advance},
        [CardName.CONQUER_MAC]: {Factory: Conquer},
        [CardName.CONQUER_MAC1]: {Factory: Conquer1},
        [CardName.PHILIP_II]: {Factory: PhilipII},
        [CardName.PHALANX]: {Factory: Phalanx},
        [CardName.HALIACMON_VALLEY]: {Factory: HaliacmonValley},
        [CardName.ORESTIS]: {Factory: Orestis},
        [CardName.PELAGONIA]: {Factory: Pelagonia},
        [CardName.UNREST_MAC]: {Factory: Unrest},
        [CardName.UNREST_MAC1]: {Factory: Unrest1},
        [CardName.UNREST_MAC2]: {Factory: Unrest2},
    },
});
