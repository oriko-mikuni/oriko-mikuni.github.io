import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {AksumitesPowerA} from "./AksumitesPowerA";
import {AksumitesPowerB} from "./AksumitesPowerB";
import {MaritimeSpiceRoute} from "./MaritimeSpiceRoute";
import {KingEndubis} from "./KingEndubis";
import {AksumiteCoinage} from "./AksumiteCoinage";
import {HimyariteKingdom} from "./HimyariteKingdom";
import {ConversionToChristianity} from "./ConversionToChristianity";
import {LandOfSheba} from "./LandOfSheba";
import {ExoticTrade} from "./ExoticTrade";
import {Stelae} from "./Stelae";
import {KingdomOfKush} from "./KingdomOfKush";
import {CityOfAdulis} from "./CityOfAdulis";
import {Glory} from "./Glory";
import {Unrest} from "./Unrest";
import {CityOfAxum} from "./CityOfAxum";
import {EritreanHighlands} from "./EritreanHighlands";
import {Amhara} from "./Amhara";
import {SaltMines} from "./SaltMines";
import {GeEzScript} from "./GeEzScript";
import {Prosperity} from "./Prosperity";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const AKS_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.AKSUMITES,
    nationCards: {
        [CardName.AKSUMITES_POWER_A]: {Factory: AksumitesPowerA},
        [CardName.AKSUMITES_POWER_B]: {Factory: AksumitesPowerB},
        [CardName.MARITIME_SPICE_ROUTE_AKS]: {Factory: MaritimeSpiceRoute},
        [CardName.KING_ENDUBIS]: {Factory: KingEndubis},
        [CardName.AKSUMITE_COINAGE]: {Factory: AksumiteCoinage},
        [CardName.HIMYARITE_KINGDOM]: {Factory: HimyariteKingdom},
        [CardName.CONVERSION_TO_CHRISTIANITY_AKS]: {Factory: ConversionToChristianity},
        [CardName.LAND_OF_SHEBA]: {Factory: LandOfSheba},
        [CardName.EXOTIC_TRADE]: {Factory: ExoticTrade},
        [CardName.STELAE]: {Factory: Stelae},
        [CardName.KINGDOM_OF_KUSH]: {Factory: KingdomOfKush},
        [CardName.CITY_OF_ADULIS]: {Factory: CityOfAdulis},
        [CardName.GLORY_AKS]: {Factory: Glory},
        [CardName.UNREST_AKS_NATION]: {Factory: Unrest},
        [CardName.CITY_OF_AXUM]: {Factory: CityOfAxum},
        [CardName.ERITREAN_HIGHLANDS]: {Factory: EritreanHighlands},
        [CardName.AMHARA]: {Factory: Amhara},
        [CardName.SALT_MINES]: {Factory: SaltMines},
        [CardName.GE_EZ_SCRIPT]: {Factory: GeEzScript},
        [CardName.PROSPERITY_AKS]: {Factory: Prosperity},
        [CardName.ADVANCE_AKS]: {Factory: Advance},
        [CardName.CONQUER_AKS]: {Factory: Conquer},
        [CardName.UNREST_AKS]: {Factory: Unrest1},
        [CardName.UNREST_AKS1]: {Factory: Unrest2},
    },
});
