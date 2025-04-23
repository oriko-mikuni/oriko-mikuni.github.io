import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Notorious} from "./common/Notorious";
import {GameModule} from "../../../common/cards/GameModule";
import {JadeMaskC} from "./common/JadeMaskC";
import {InvasionC} from "./common/InvasionC";
import {Mysticism} from "./common/Mysticism";
import {Ambassador} from "./common/Ambassador";
import {Wilderness} from "./common/Wilderness";
import {Jungle} from "./common/Jungle";
import {Mountain} from "./common/Mountain";
import {Coast} from "./common/Coast";
import {Cape} from "./common/Cape";
import {JadeMaskL} from "./common/JadeMaskL";
import {InvasionL} from "./common/InvasionL";
import {Religion} from "./common/Religion";
import {Peak} from "./common/Peak";
import {Peninsula} from "./common/Peninsula";
import {Lowlands} from "./common/Lowlands";
import {Archipelago} from "./common/Archipelago";
import {FortifiedRegion} from "./common/FortifiedRegion";
import {Island} from "./common/Island";
import {Celts} from "./common/Celts";
import {Crete} from "./nation/Crete";
import {CityOfCarthage} from "./nation/CityOfCarthage";
import {TradingShips} from "./nation/TradingShips";
import {Berbers} from "./nation/Berbers";
import {BalearicIslands} from "./nation/BalearicIslands";
import {Celtica} from "./nation/Celtica";
import {GreekProsperity} from "./nation/GreekProsperity";
import {ScythiansPowerA} from "./nation/ScythiansPowerA";
import {ScythiansPowerB} from "./nation/ScythiansPowerB";
import {Ateas} from "./nation/Ateas";
import {Nomads} from "./nation/Nomads";
import {NomadsB} from "./nation/NomadsB";
import {Cafall} from "./nation/Cafall";
import {AtlanteansPowerA} from "./nation/AtlanteansPowerA";
import {AtlanteansPowerB} from "./nation/AtlanteansPowerB";
import {AdvancedCulture} from "./nation/AdvancedCulture";
import {SpreadOfAtlantis} from "./nation/SpreadOfAtlantis";
import {MythsAndLegends} from "./nation/MythsAndLegends";
import {VastWealth} from "./nation/VastWealth";
import {AtlanteanFleet} from "./nation/AtlanteanFleet";
import {IndianElephants} from "./nation/IndianElephants";
import {IndianElephantsB} from "./nation/IndianElephantsB";
import {Chandragupta} from "./nation/Chandragupta";
import {MinoanTraders} from "./nation/MinoanTraders";
import {Pottery} from "./nation/Pottery";
import {LodestoneCompass} from "./nation/LodestoneCompass";
import {BallGames} from "./nation/BallGames";
import {UtopiansPowerA} from "./nation/UtopiansPowerA";
import {UtopiansPowerB} from "./nation/UtopiansPowerB";
import {GatesOfShangrila} from "./nation/GatesOfShangrila";
import {Shangrila} from "./nation/Shangrila";
import {Portals} from "./nation/Portals";
import {LostTomes} from "./nation/LostTomes";

export const HORIZONS_UPDATED_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.HORIZONS_UPDATE,
    commonCards: {
        [CardName.NOTORIOUS_NEW]: {Factory: Notorious},
        [CardName.JADE_MASK_C_NEW]: {Factory: JadeMaskC},
        [CardName.INVASION_C_NEW]: {Factory: InvasionC},
        [CardName.MYSTICISM_NEW]: {Factory: Mysticism},
        [CardName.AMBASSADOR_NEW]: {Factory: Ambassador},
        [CardName.WILDERNESS_NEW]: {Factory: Wilderness},
        [CardName.JUNGLE_NEW]: {Factory: Jungle},
        [CardName.MOUNTAIN_C_NEW]: {Factory: Mountain},
        [CardName.COAST_NEW]: {Factory: Coast},
        [CardName.CAPE_NEW]: {Factory: Cape},
        [CardName.JADE_MASK_L_NEW]: {Factory: JadeMaskL},
        [CardName.INVASION_L_NEW]: {Factory: InvasionL},
        [CardName.RELIGION_NEW]: {Factory: Religion},
        [CardName.PEAK_L_NEW]: {Factory: Peak},
        [CardName.PENINSULA_NEW]: {Factory: Peninsula},
        [CardName.LOWLANDS_NEW]: {Factory: Lowlands},
        [CardName.ARCHIPELAGO_NEW]: {Factory: Archipelago},
        [CardName.FORTIFIED_REGION_NEW]: {Factory: FortifiedRegion},
        [CardName.ISLAND_NEW]: {Factory: Island},
        [CardName.CELTS_NEW]: {Factory: Celts},
        [CardName.CITY_OF_CARTHAGE_NEW]: {Factory: CityOfCarthage},
        [CardName.TRADING_SHIPS_NEW]: {Factory: TradingShips},
        [CardName.BERBERS_NEW]: {Factory: Berbers},
        [CardName.BALEARIC_ISLANDS_NEW]: {Factory: BalearicIslands},
        [CardName.CELTICA_NEW]: {Factory: Celtica},
        [CardName.GREEK_PROSPERITY_NEW]: {Factory: GreekProsperity},
        [CardName.SCYTHIANS_POWER_A_NEW]: {Factory: ScythiansPowerA},
        [CardName.SCYTHIANS_POWER_B_NEW]: {Factory: ScythiansPowerB},
        [CardName.ATEAS_NEW]: {Factory: Ateas},
        [CardName.NOMADS_NEW]: {Factory: Nomads},
        [CardName.NOMADS_B_NEW]: {Factory: NomadsB},
        [CardName.CAFALL_NEW]: {Factory: Cafall},
        [CardName.ATLANTEANS_POWER_A_NEW]: {Factory: AtlanteansPowerA},
        [CardName.ATLANTEANS_POWER_B_NEW]: {Factory: AtlanteansPowerB},
        [CardName.ADVANCED_CULTURE_NEW]: {Factory: AdvancedCulture},
        [CardName.SPREAD_OF_ATLANTIS_NEW]: {Factory: SpreadOfAtlantis},
        [CardName.MYTHS_AND_LEGENDS_NEW]: {Factory: MythsAndLegends},
        [CardName.VAST_WEALTH_NEW]: {Factory: VastWealth},
        [CardName.ATLANTEAN_FLEET_NEW]: {Factory: AtlanteanFleet},
        [CardName.INDIAN_ELEPHANTS_NEW]: {Factory: IndianElephants},
        [CardName.INDIAN_ELEPHANTS_B_NEW]: {Factory: IndianElephantsB},
        [CardName.CHANDRAGUPTA_NEW]: {Factory: Chandragupta},
        [CardName.MINOAN_TRADERS_NEW]: {Factory: MinoanTraders},
        [CardName.POTTERY_NEW]: {Factory: Pottery},
        [CardName.CRETE_NEW]: {Factory: Crete},
        [CardName.LODESTONE_COMPASS_NEW]: {Factory: LodestoneCompass},
        [CardName.BALL_GAMES_NEW]: {Factory: BallGames},
        [CardName.UTOPIANS_POWER_A_NEW]: {Factory: UtopiansPowerA},
        [CardName.UTOPIANS_POWER_B_NEW]: {Factory: UtopiansPowerB},
        [CardName.GATES_OF_SHANGRILA_NEW]: {Factory: GatesOfShangrila},
        [CardName.SHANGRILA_NEW]: {Factory: Shangrila},
        [CardName.PORTALS_NEW]: {Factory: Portals},
        [CardName.LOST_TOMES_NEW]: {Factory: LostTomes},
    },
});
