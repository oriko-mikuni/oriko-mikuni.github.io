import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {Notorious} from "./fame/Notorious";
import {Praiseworthy} from "./fame/Praiseworthy";
import {Great} from "./fame/Great";
import {Marvellous} from "./fame/Marvellous";
import {Glorious} from "./fame/Glorious";
import {Triumphant} from "./fame/Triumphant";
import {Triumphant1} from "./fame/Triumphant1";
import {AweInspiring} from "./fame/AweInspiring";
import {StandingArmy} from "./uncivilised/StandingArmy";
import {JadeMask} from "./uncivilised/JadeMask";
import {Elders} from "./uncivilised/Elders";
import {Town} from "./uncivilised/Town";
import {Town1} from "./uncivilised/Town1";
import {Shrine} from "./uncivilised/Shrine";
import {Invasion} from "./uncivilised/Invasion";
import {Mysticism} from "./uncivilised/Mysticism";
import {Oracle} from "./uncivilised/Oracle";
import {Agriculture} from "./uncivilised/Agriculture";
import {Boats} from "./uncivilised/Boats";
import {Shaduf} from "./uncivilised/Shaduf";
import {RitualsNCeremonies} from "./uncivilised/RitualsNCeremonies";
import {Ambassador} from "./uncivilised/Ambassador";
import {City} from "./uncivilised/City";
import {City1} from "./uncivilised/City1";
import {City2} from "./uncivilised/City2";
import {Gambling} from "./uncivilised/Gambling";
import {Port} from "./uncivilised/Port";
import {Diplomacy} from "./uncivilised/Diplomacy";
import {Leadership} from "./uncivilised/Leadership";
import {LostScroll} from "./uncivilised/LostScroll";
import {DramaNPoetry} from "./civilised/DramaNPoetry";
import {Education} from "./civilised/Education";
import {Moneylender} from "./civilised/Moneylender";
import {Corruption} from "./civilised/Corruption";
import {Onager} from "./civilised/Onager";
import {Metropolis} from "./civilised/Metropolis";
import {Metropolis1} from "./civilised/Metropolis1";
import {Pharmacy} from "./civilised/Pharmacy";
import {Wonder} from "./civilised/Wonder";
import {Coinage} from "./civilised/Coinage";
import {Exports} from "./civilised/Exports";
import {UrbanDevelopment} from "./civilised/UrbanDevelopment";
import {Mercenaries} from "./civilised/Mercenaries";
import {Temple} from "./civilised/Temple";
import {Cataphract} from "./civilised/Cataphract";
import {Wilderness} from "./region/Wilderness";
import {Jungle} from "./region/Jungle";
import {Mountain} from "./region/Mountain";
import {Coast} from "./region/Coast";
import {Floodplain} from "./region/Floodplain";
import {Forest} from "./region/Forest";
import {Oasis} from "./region/Oasis";
import {Hills} from "./region/Hills";
import {Marsh} from "./region/Marsh";
import {Steppe} from "./region/Steppe";
import {River} from "./region/River";
import {Cape} from "./region/Cape";
import {Woodland} from "./region/Woodland";
import {SacredPass} from "./region/SacredPass";
import {Armenians} from "./tributary/Armenians";
import {Assyrians} from "./tributary/Assyrians";
import {Egyptians} from "./tributary/Egyptians";
import {Ionians} from "./tributary/Ionians";
import {Qin} from "./tributary/Qin";
import {Olmecs} from "./tributary/Olmecs";
import {Sumerians} from "./tributary/Sumerians";
import {Aksumites} from "./tributary/Aksumites";
import {Minoans} from "./tributary/Minoans";
import {Mauryans} from "./tributary/Mauryans";
import {Hittites} from "./tributary/Hittites";

export const CLASSICS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.CLASSICS_COMMON,
    commonCards: {
        [CardName.PRAISEWORTHY]: {Factory: Praiseworthy},
        [CardName.GREAT]: {Factory: Great},
        [CardName.NOTORIOUS]: {Factory: Notorious},
        [CardName.MARVELLOUS]: {Factory: Marvellous},
        [CardName.GLORIOUS]: {Factory: Glorious},
        [CardName.TRIUMPHANT]: {Factory: Triumphant},
        [CardName.TRIUMPHANT1]: {Factory: Triumphant1},
        [CardName.AWE_INSPIRING]: {Factory: AweInspiring},
        [CardName.STANDING_ARMY]: {Factory: StandingArmy},
        [CardName.JADE_MASK_C]: {Factory: JadeMask},
        [CardName.ELDERS_C]: {Factory: Elders},
        [CardName.TOWN]: {Factory: Town},
        [CardName.TOWN1]: {Factory: Town1},
        [CardName.SHRINE]: {Factory: Shrine},
        [CardName.INVASION_C]: {Factory: Invasion},
        [CardName.MYSTICISM]: {Factory: Mysticism},
        [CardName.ORACLE_C]: {Factory: Oracle},
        [CardName.AGRICULTURE]: {Factory: Agriculture},
        [CardName.BOATS]: {Factory: Boats},
        [CardName.SHADUF]: {Factory: Shaduf},
        [CardName.RITUALS_N_CEREMONIES_C]: {Factory: RitualsNCeremonies},
        [CardName.AMBASSADOR]: {Factory: Ambassador},
        [CardName.CITY_C]: {Factory: City},
        [CardName.CITY_C1]: {Factory: City1},
        [CardName.CITY_C2]: {Factory: City2},
        [CardName.GAMBLING]: {Factory: Gambling},
        [CardName.PORT]: {Factory: Port},
        [CardName.DIPLOMACY_C]: {Factory: Diplomacy},
        [CardName.LEADERSHIP_C]: {Factory: Leadership},
        [CardName.LOST_SCROLL_C]: {Factory: LostScroll},
        [CardName.DRAMA_N_POETRY_C]: {Factory: DramaNPoetry},
        [CardName.EDUCATION_C]: {Factory: Education},
        [CardName.MONEYLENDER_C]: {Factory: Moneylender},
        [CardName.CORRUPTION_C]: {Factory: Corruption},
        [CardName.ONAGER_C]: {Factory: Onager},
        [CardName.METROPOLIS_C]: {Factory: Metropolis},
        [CardName.METROPOLIS_C1]: {Factory: Metropolis1},
        [CardName.PHARMACY]: {Factory: Pharmacy},
        [CardName.WONDER]: {Factory: Wonder},
        [CardName.COINAGE]: {Factory: Coinage},
        [CardName.EXPORTS_C]: {Factory: Exports},
        [CardName.URBAN_DEVELOPMENT_C]: {Factory: UrbanDevelopment},
        [CardName.MERCENARIES_C]: {Factory: Mercenaries},
        [CardName.TEMPLE]: {Factory: Temple},
        [CardName.CATAPHRACT_C]: {Factory: Cataphract},
        [CardName.WILDERNESS]: {Factory: Wilderness},
        [CardName.JUNGLE]: {Factory: Jungle},
        [CardName.MOUNTAIN_C]: {Factory: Mountain},
        [CardName.COAST]: {Factory: Coast},
        [CardName.FLOODPLAIN]: {Factory: Floodplain},
        [CardName.FOREST]: {Factory: Forest},
        [CardName.OASIS]: {Factory: Oasis},
        [CardName.HILLS]: {Factory: Hills},
        [CardName.MARSH]: {Factory: Marsh},
        [CardName.STEPPE]: {Factory: Steppe},
        [CardName.RIVER]: {Factory: River},
        [CardName.CAPE]: {Factory: Cape},
        [CardName.WOODLAND]: {Factory: Woodland},
        [CardName.SACRED_PASS]: {Factory: SacredPass},
        [CardName.ARMENIANS]: {Factory: Armenians},
        [CardName.ASSYRIANS]: {Factory: Assyrians},
        [CardName.EGYPTIANS]: {Factory: Egyptians},
        [CardName.IONIANS]: {Factory: Ionians},
        [CardName.QIN]: {Factory: Qin},
        [CardName.OLMECS]: {Factory: Olmecs},
        [CardName.SUMERIANS]: {Factory: Sumerians},
        [CardName.AKSUMITES]: {Factory: Aksumites},
        [CardName.MINOANS]: {Factory: Minoans},
        [CardName.MAURYANS]: {Factory: Mauryans},
        [CardName.HITTITES]: {Factory: Hittites},
    }
});
