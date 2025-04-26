import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {Supreme} from "./fame/Supreme";
import {Supreme1} from "./fame/Supreme1";
import {Determined} from "./fame/Determined";
import {Canny} from "./fame/Canny";
import {Honourable} from "./fame/Honourable";
import {Brave} from "./fame/Brave";
import {Intrepid} from "./fame/Intrepid";
import {Influential} from "./fame/Influential";
import {Navigation} from "./uncivilised/Navigation";
import {UndecipherableScroll} from "./uncivilised/UndecipherableScroll";
import {Elders} from "./uncivilised/Elders";
import {TradeCaravans} from "./uncivilised/TradeCaravans";
import {Warfare} from "./uncivilised/Warfare";
import {Altar} from "./uncivilised/Altar";
import {TradingPost} from "./uncivilised/TradingPost";
import {Priesthood} from "./uncivilised/Priesthood";
import {Oracle} from "./uncivilised/Oracle";
import {Vineyards} from "./uncivilised/Vineyards";
import {Catamarans} from "./uncivilised/Caramarans";
import {Terraces} from "./uncivilised/Terraces";
import {HuntersAndTrackers} from "./uncivilised/HuntersAndTrackers";
import {RiverRaiders} from "./uncivilised/RiverRaiders";
import {TradingCity} from "./uncivilised/TradingCity";
import {TradingCity1} from "./uncivilised/TradingCity1";
import {City} from "./uncivilised/City";
import {TradingCity2} from "./uncivilised/TradingCity2";
import {CulturalDiversity} from "./uncivilised/CulturalDiversity";
import {Seaport} from "./uncivilised/Seaport";
import {Travellers} from "./uncivilised/Travellers";
import {Barter} from "./uncivilised/Barter";
import {Protection} from "./uncivilised/Protection";
import {GoldenMask} from "./uncivilised/GoldenMask";
import {Pirates} from "./uncivilised/Pirates";
import {Taxation} from "./civilised/Taxation";
import {EpicPoetry} from "./civilised/EpicPoetry";
import {Moneylender} from "./civilised/Moneylender";
import {NabataeanKingdom} from "./civilised/NabataeanKingdom";
import {Scribes} from "./civilised/Scribes";
import {Metropolis} from "./civilised/Metropolis";
import {Warehouse} from "./civilised/Warehouse";
import {HarbourCity} from "./civilised/HarbourCity";
import {Magistrate} from "./civilised/Magistrate";
import {Couriers} from "./civilised/Couriers";
import {Smugglers} from "./civilised/Smugglers";
import {MarketStall} from "./civilised/MarketStall";
import {Mercenaries} from "./civilised/Mercenaries";
import {Gardening} from "./civilised/Gardening";
import {Bucellarii} from "./civilised/Bucellarii";
import {Tyranny} from "./civilised/Tyranny";
import {Triremes} from "./civilised/Triremes";
import {Imports} from "./civilised/Imports";
import {Volcano} from "./region/Volcano";
import {Mangrove} from "./region/Mangrove";
import {Lagoon} from "./region/Lagoon";
import {RiverDelta} from "./region/RiverDelta";
import {RiftValley} from "./region/RiftValley";
import {Glacier} from "./region/Glacier";
import {Savannah} from "./region/Savannah";
import {Scrubland} from "./region/Scrubland";
import {Bogs} from "./region/Bogs";
import {Valley} from "./region/Valley";
import {DistantIsland} from "./region/DistantIsland";
import {Borderland} from "./region/Borderland";
import {AlluvialPlain} from "./region/AlluvialPlain";
import {Heath} from "./region/Heath";
import {MelayuKingdom} from "./tributary/MelayuKingdom";
import {Harrapans} from "./tributary/Harrapans";
import {Goryeo} from "./tributary/Goryeo";
import {Akkadians} from "./tributary/Akkadians";
import {Byzantines} from "./tributary/Byzantines";
import {Punt} from "./tributary/Punt";
import {SeleucidEmpire} from "./tributary/SeleucidEmpire";
import {CarolingianKingdom} from "./tributary/CarolingianKingdom";
import {KhmerEmpire} from "./tributary/KhmerEmpire";
import {Sabaeans} from "./tributary/Sabaeans";
import {Cimmerians} from "./tributary/Cimmerians";
import {Illyrians} from "./tributary/Illyrians";
import {Tyrrhenians} from "./tributary/Tyrrhenians";

export const HORIZONS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.HORIZONS_COMMON,
    commonCards: {
        [CardName.SUPREME]: {Factory: Supreme},
        [CardName.SUPREME1]: {Factory: Supreme1},
        [CardName.DETERMINED]: {Factory: Determined},
        [CardName.CANNY]: {Factory: Canny},
        [CardName.HONOURABLE]: {Factory: Honourable},
        [CardName.BRAVE]: {Factory: Brave},
        [CardName.INTREPID]: {Factory: Intrepid},
        [CardName.INFLUENTIAL]: {Factory: Influential},
        [CardName.NAVIGATION]: {Factory: Navigation},
        [CardName.UNDECIPHERABLE_SCROLL]: {Factory: UndecipherableScroll},
        [CardName.ELDERS_H]: {Factory: Elders},
        [CardName.TRADE_CARAVANS]: {Factory: TradeCaravans},
        [CardName.WARFARE]: {Factory: Warfare},
        [CardName.ALTAR]: {Factory: Altar},
        [CardName.TRADING_POST]: {Factory: TradingPost},
        [CardName.PRIESTHOOD]: {Factory: Priesthood},
        [CardName.ORACLE_H]: {Factory: Oracle},
        [CardName.VINEYARDS]: {Factory: Vineyards},
        [CardName.CATAMARANS]: {Factory: Catamarans},
        [CardName.TERRACES]: {Factory: Terraces},
        [CardName.HUNTERS_AND_TRACKERS]: {Factory: HuntersAndTrackers},
        [CardName.RIVER_RAIDERS]: {Factory: RiverRaiders},
        [CardName.TRADING_CITY]: {Factory: TradingCity},
        [CardName.TRADING_CITY1]: {Factory: TradingCity1},
        [CardName.CITY_H]: {Factory: City},
        [CardName.TRADING_CITY2]: {Factory: TradingCity2},
        [CardName.CULTURAL_DIVERSITY]: {Factory: CulturalDiversity},
        [CardName.SEAPORT]: {Factory: Seaport},
        [CardName.TRAVELLERS]: {Factory: Travellers},
        [CardName.BARTER]: {Factory: Barter},
        [CardName.PROTECTION]: {Factory: Protection},
        [CardName.GOLDEN_MASK]: {Factory: GoldenMask},
        [CardName.PIRATES]: {Factory: Pirates},
        [CardName.TAXATION]: {Factory: Taxation},
        [CardName.EPIC_POETRY]: {Factory: EpicPoetry},
        [CardName.MONEYLENDER_H]: {Factory: Moneylender},
        [CardName.NABATAEAN_KINGDOM]: {Factory: NabataeanKingdom},
        [CardName.SCRIBES]: {Factory: Scribes},
        [CardName.METROPOLIS_H]: {Factory: Metropolis},
        [CardName.WAREHOUSE]: {Factory: Warehouse},
        [CardName.HARBOUR_CITY]: {Factory: HarbourCity},
        [CardName.MAGISTRATE]: {Factory: Magistrate},
        [CardName.COURIERS]: {Factory: Couriers},
        [CardName.SMUGGLERS]: {Factory: Smugglers},
        [CardName.MARKET_STALL]: {Factory: MarketStall},
        [CardName.MERCENARIES_H]: {Factory: Mercenaries},
        [CardName.GARDENING]: {Factory: Gardening},
        [CardName.BUCELLARII]: {Factory: Bucellarii},
        [CardName.TYRANNY]: {Factory: Tyranny},
        [CardName.TRIREMES]: {Factory: Triremes},
        [CardName.IMPORTS]: {Factory: Imports},
        [CardName.VOLCANO]: {Factory: Volcano},
        [CardName.MANGROVE]: {Factory: Mangrove},
        [CardName.LAGOON]: {Factory: Lagoon},
        [CardName.RIVER_DELTA]: {Factory: RiverDelta},
        [CardName.RIFT_VALLEY]: {Factory: RiftValley},
        [CardName.GLACIER]: {Factory: Glacier},
        [CardName.SAVANNAH]: {Factory: Savannah},
        [CardName.SCRUBLAND]: {Factory: Scrubland},
        [CardName.BOGS]: {Factory: Bogs},
        [CardName.VALLEY]: {Factory: Valley},
        [CardName.BORDERLAND]: {Factory: Borderland},
        [CardName.ALLUVIAL_PLAIN]: {Factory: AlluvialPlain},
        [CardName.HEATH]: {Factory: Heath},
        [CardName.DISTANT_ISLAND]: {Factory: DistantIsland},
        [CardName.MELAYU_KINGDOM]: {Factory: MelayuKingdom},
        [CardName.HARRAPANS]: {Factory: Harrapans},
        [CardName.GORYEO]: {Factory: Goryeo},
        [CardName.AKKADIANS]: {Factory: Akkadians},
        [CardName.BYZANTINES]: {Factory: Byzantines},
        [CardName.PUNT]: {Factory: Punt},
        [CardName.SELEUCID_EMPIRE]: {Factory: SeleucidEmpire},
        [CardName.CAROLINGIAN_KINGDOM]: {Factory: CarolingianKingdom},
        [CardName.KHMER_EMPIRE]: {Factory: KhmerEmpire},
        [CardName.SABAEANS]: {Factory: Sabaeans},
        [CardName.CIMMERIANS]: {Factory: Cimmerians},
        [CardName.ILLYRIANS]: {Factory: Illyrians},
        [CardName.TYRRHENIANS]: {Factory: Tyrrhenians},
    },
});
