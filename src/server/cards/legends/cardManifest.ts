import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Magnificent} from "./fame/Magnificent";
import {GameModule} from "../../../common/cards/GameModule";
import {Imperial} from "./fame/Imperial";
import {Independent} from "./fame/Independent";
import {Outstanding} from "./fame/Outstanding";
import {Proud} from "./fame/Proud";
import {Proud1} from "./fame/Proud1";
import {Eminent} from "./fame/Eminent";
import {Acclaimed} from "./fame/Acclaimed";
import {JadeMask} from "./uncivilised/JadeMask";
import {Elders} from "./uncivilised/Elders";
import {Invasion} from "./uncivilised/Invasion";
import {Oracle} from "./uncivilised/Oracle";
import {RitualsNCeremonies} from "./uncivilised/RitualsNCeremonies";
import {City} from "./uncivilised/City";
import {City1} from "./uncivilised/City1";
import {City2} from "./uncivilised/City2";
import {Mining} from "./uncivilised/Mining";
import {Espionage} from "./uncivilised/Espionage";
import {Monument} from "./uncivilised/Monument";
import {CodeOfLaws} from "./uncivilised/CodeOfLaws";
import {Religion} from "./uncivilised/Religion";
import {Domestication} from "./uncivilised/Domestication";
import {WaterMill} from "./uncivilised/WaterMill";
import {Qanat} from "./uncivilised/Qanat";
import {City3} from "./uncivilised/City3";
import {RoadBuilding} from "./uncivilised/RoadBuilding";
import {Art} from "./uncivilised/Art";
import {Diplomacy} from "./uncivilised/Diplomacy";
import {Leadership} from "./uncivilised/Leadership";
import {LostScroll} from "./uncivilised/LostScroll";
import {DramaNPoetry} from "./civilised/DramaNPoetry";
import {Education} from "./civilised/Education";
import {Moneylender} from "./civilised/Moneylender";
import {Corruption} from "./civilised/Corruption";
import {Onager} from "./civilised/Onager";
import {Metropolis} from "./civilised/Metropolis";
import {Exports} from "./civilised/Exports";
import {UrbanDevelopment} from "./civilised/UrbanDevelopment";
import {Mercenaries} from "./civilised/Mercenaries";
import {Cataphract} from "./civilised/Cataphract";
import {Astronomy} from "./civilised/Astronomy";
import {Cartography} from "./civilised/Cartography";
import {Masonry} from "./civilised/Masonry";
import {CivilService} from "./civilised/CivilService";
import {Amphitheatres} from "./civilised/Amphitheatres";
import {FortunateIsle} from "./region/FortunateIsle";
import {Rainforest} from "./region/Rainforest";
import {Mountain} from "./region/Mountain";
import {Peninsula} from "./region/Peninsula";
import {Lakes} from "./region/Lakes";
import {Highlands} from "./region/Highlands";
import {SacredGrove} from "./region/SacredGrove";
import {Lowlands} from "./region/Lowlands";
import {Moor} from "./region/Moor";
import {Plain} from "./region/Plain";
import {Archipelago} from "./region/Archipelago";
import {FortifiedRegion} from "./region/FortifiedRegion";
import {Grassland} from "./region/Grassland";
import {Island} from "./region/Island";
import {Etruscans} from "./tributary/Etruscans";
import {Scythians} from "./tributary/Scythians";
import {Vikings} from "./tributary/Vikings";
import {Phoenicians} from "./tributary/Phoenicians";
import {Romans} from "./tributary/Romans";
import {Greeks} from "./tributary/Greeks";
import {Carthaginians} from "./tributary/Carthaginians";
import {Persians} from "./tributary/Persians";
import {Celts} from "./tributary/Celts";
import {Macedonians} from "./tributary/Macedonians";
import {Xiongnu} from "./tributary/Xiongnu";

export const LEGENDS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.LEGENDS_COMMON,
    commonCards: {
        [CardName.IMPERIAL]: {Factory: Imperial},
        [CardName.INDEPENDENT]: {Factory: Independent},
        [CardName.MAGNIFICENT]: {Factory: Magnificent},
        [CardName.OUTSTANDING]: {Factory: Outstanding},
        [CardName.PROUD]: {Factory: Proud},
        [CardName.PROUD1]: {Factory: Proud1},
        [CardName.EMINENT]: {Factory: Eminent},
        [CardName.ACCLAIMED]: {Factory: Acclaimed},
        [CardName.MINING]: {Factory: Mining},
        [CardName.JADE_MASK_L]: {Factory: JadeMask},
        [CardName.ELDERS_L]: {Factory: Elders},
        [CardName.ESPIONAGE]: {Factory: Espionage},
        [CardName.INVASION_L]: {Factory: Invasion},
        [CardName.MONUMENT]: {Factory: Monument},
        [CardName.CODE_OF_LAWS]: {Factory: CodeOfLaws},
        [CardName.RELIGION]: {Factory: Religion},
        [CardName.ORACLE_L]: {Factory: Oracle},
        [CardName.DOMESTICATION]: {Factory: Domestication},
        [CardName.WATER_MILL]: {Factory: WaterMill},
        [CardName.QANAT]: {Factory: Qanat},
        [CardName.RITUALS_N_CEREMONIES_L]: {Factory: RitualsNCeremonies},
        [CardName.CITY_L]: {Factory: City},
        [CardName.CITY_L1]: {Factory: City1},
        [CardName.CITY_L2]: {Factory: City2},
        [CardName.CITY_L3]: {Factory: City3},
        [CardName.ROAD_BUILDING]: {Factory: RoadBuilding},
        [CardName.ART]: {Factory: Art},
        [CardName.DIPLOMACY_L]: {Factory: Diplomacy},
        [CardName.LEADERSHIP_L]: {Factory: Leadership},
        [CardName.LOST_SCROLL_L]: {Factory: LostScroll},
        [CardName.DRAMA_N_POETRY_L]: {Factory: DramaNPoetry},
        [CardName.EDUCATION_L]: {Factory: Education},
        [CardName.MONEYLENDER_L]: {Factory: Moneylender},
        [CardName.CORRUPTION_L]: {Factory: Corruption},
        [CardName.ONAGER_L]: {Factory: Onager},
        [CardName.METROPOLIS_L]: {Factory: Metropolis},
        [CardName.ASTRONOMY]: {Factory: Astronomy},
        [CardName.CARTOGRAPHY]: {Factory: Cartography},
        [CardName.MASONRY]: {Factory: Masonry},
        [CardName.CIVIL_SERVICE]: {Factory: CivilService},
        [CardName.EXPORTS_L]: {Factory: Exports},
        [CardName.URBAN_DEVELOPMENT_L]: {Factory: UrbanDevelopment},
        [CardName.MERCENARIES_L]: {Factory: Mercenaries},
        [CardName.AMPHITHEATRE]: {Factory: Amphitheatres},
        [CardName.CATAPHRACT_L]: {Factory: Cataphract},
        [CardName.FORTUNATE_ISLE]: {Factory: FortunateIsle},
        [CardName.RAINFOREST]: {Factory: Rainforest},
        [CardName.MOUNTAIN_L]: {Factory: Mountain},
        [CardName.PENINSULA]: {Factory: Peninsula},
        [CardName.LAKES]: {Factory: Lakes},
        [CardName.HIGHLANDS]: {Factory: Highlands},
        [CardName.SACRED_GROVE]: {Factory: SacredGrove},
        [CardName.LOWLANDS]: {Factory: Lowlands},
        [CardName.MOOR]: {Factory: Moor},
        [CardName.PLAIN]: {Factory: Plain},
        [CardName.ARCHIPELAGO]: {Factory: Archipelago},
        [CardName.FORTIFIED_REGION]: {Factory: FortifiedRegion},
        [CardName.GRASSLAND]: {Factory: Grassland},
        [CardName.ISLAND]: {Factory: Island},
        [CardName.ETRUSCANS]: {Factory: Etruscans},
        [CardName.SCYTHIANS]: {Factory: Scythians},
        [CardName.VIKINGS]: {Factory: Vikings},
        [CardName.PHOENICIANS]: {Factory: Phoenicians},
        [CardName.ROMANS]: {Factory: Romans},
        [CardName.GREEKS]: {Factory: Greeks},
        [CardName.CARTHAGINIANS]: {Factory: Carthaginians},
        [CardName.PERSIANS]: {Factory: Persians},
        [CardName.CELTS]: {Factory: Celts},
        [CardName.MACEDONIANS]: {Factory: Macedonians},
        [CardName.XIONGNU]: {Factory: Xiongnu},
    }
});
