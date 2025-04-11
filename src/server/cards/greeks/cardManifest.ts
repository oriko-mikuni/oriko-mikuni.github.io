import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GreeksPowerA} from "./GreeksPowerA";
import {GreeksPowerB} from "./GreeksPowerB";
import {OlympicGames} from "./OlympicGames";
import {GreekProsperity} from "./GreekProsperity";
import {Pericles} from "./Pericles";
import {CityOfCorinth} from "./CityOfCorinth";
import {Science} from "./Science";
import {GreekInnovation} from "./GreekInnovation";
import {DirectDemocracy} from "./DirectDemocracy";
import {Lighthouse} from "./Lighthouse";
import {Philosophy} from "./Philosophy";
import {CityOfAthens} from "./CityOfAthens";
import {PlainsOfThessaly} from "./PlainsOfThessaly";
import {Unrest} from "./Unrest";
import {Glory} from "./Glory";
import {GreekMercenaries} from "./GreekMercenaries";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Settlers} from "./Settlers";
import {CityOfSparta} from "./CityOfSparta";
import {Peloponnese} from "./Peloponnese";
import {ForestOfPholoe} from "./ForestOfPholoe";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {GameModule} from "../../../common/cards/GameModule";

export const GRE_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.GREEKS,
    nationCards: {
        [CardName.GREEKS_POWER_A]: {Factory: GreeksPowerA},
        [CardName.GREEKS_POWER_B]: {Factory: GreeksPowerB},
        [CardName.OLYMPIC_GAMES]: {Factory: OlympicGames},
        [CardName.GREEK_PROSPERITY]: {Factory: GreekProsperity},
        [CardName.PERICLES]: {Factory: Pericles},
        [CardName.CITY_OF_CORINTH]: {Factory: CityOfCorinth},
        [CardName.SCIENCE_GRE]: {Factory: Science},
        [CardName.GREEK_INNOVATION]: {Factory: GreekInnovation},
        [CardName.DIRECT_DEMOCRACY]: {Factory: DirectDemocracy},
        [CardName.LIGHTHOUSE]: {Factory: Lighthouse},
        [CardName.PHILOSOPHY_GRE]: {Factory: Philosophy},
        [CardName.CITY_OF_ATHENS]: {Factory: CityOfAthens},
        [CardName.PLAINS_OF_THESSALY]: {Factory: PlainsOfThessaly},
        [CardName.UNREST_GRE_NATION]: {Factory: Unrest},
        [CardName.GLORY_GRE]: {Factory: Glory},
        [CardName.GREEK_MERCENARIES]: {Factory: GreekMercenaries},
        [CardName.ADVANCE_GRE]: {Factory: Advance},
        [CardName.CONQUER_GRE]: {Factory: Conquer},
        [CardName.SETTLERS]: {Factory: Settlers},
        [CardName.CITY_OF_SPARTA]: {Factory: CityOfSparta},
        [CardName.PELOPONNESE]: {Factory: Peloponnese},
        [CardName.FOREST_OF_PHOLOE]: {Factory: ForestOfPholoe},
        [CardName.UNREST_GRE]: {Factory: Unrest1},
        [CardName.UNREST_GRE1]: {Factory: Unrest2},
    },
});
