import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {Merchant1} from "./Merchant1";
import {Merchant2} from "./Merchant2";
import {Merchant3} from "./Merchant3";
import {Merchant4} from "./Merchant4";
import {MerchantEmpire1} from "./MerchantEmpire1";
import {MerchantEmpire2} from "./MerchantEmpire2";
import {MerchantEmpire3} from "./MerchantEmpire3";
import {MerchantEmpire4} from "./MerchantEmpire4";
import {Welcoming} from "./Welcoming";
import {CornwallTinRoad} from "./CornwallTinRoad";
import {LapisLazuliTrade} from "./LapisLazuliTrade";
import {PhilippinesJadeTrade} from "./PhilippinesJadeTrade";
import {BalticAmberRoad} from "./BalticAmberRoad";
import {HopewellExchangeSystem} from "./HopewellExchangeSystem";
import {SwahiliCoast} from "./SwahiliCoast";
import {TheNileCorridor} from "./TheNileCorridor";
import {AndesHighway} from "./AndesHighway";
import {MediterraneanCircle} from "./MediterraneanCircle";

export const TRADE_ROUTE_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.TRADE_ROUTE_EXPANSION,
    commonCards: {
        [CardName.MERCHANT1]: {Factory: Merchant1},
        [CardName.MERCHANT2]: {Factory: Merchant2},
        [CardName.MERCHANT3]: {Factory: Merchant3},
        [CardName.MERCHANT4]: {Factory: Merchant4},
        [CardName.MERCHANT_EMPIRE1]: {Factory: MerchantEmpire1},
        [CardName.MERCHANT_EMPIRE2]: {Factory: MerchantEmpire2},
        [CardName.MERCHANT_EMPIRE3]: {Factory: MerchantEmpire3},
        [CardName.MERCHANT_EMPIRE4]: {Factory: MerchantEmpire4},
        [CardName.WELCOMING]: {Factory: Welcoming},
        [CardName.CORNWALL_TIN_ROAD]: {Factory: CornwallTinRoad},
        [CardName.LAPIS_LAZULI_TRADE]: {Factory: LapisLazuliTrade},
        [CardName.PHILIPPINES_JADE_TRADE]: {Factory: PhilippinesJadeTrade},
        [CardName.BALTIC_AMBER_ROAD]: {Factory: BalticAmberRoad},
        [CardName.HOPEWELL_EXCHANGE_SYSTEM]: {Factory: HopewellExchangeSystem},
        [CardName.SWAHILI_COAST]: {Factory: SwahiliCoast},
        [CardName.THE_NILE_CORRIDOR]: {Factory: TheNileCorridor},
        [CardName.ANDES_HIGHWAY]: {Factory: AndesHighway},
        [CardName.MEDITERRANEAN_CIRCLE]: {Factory: MediterraneanCircle},
    },
});
