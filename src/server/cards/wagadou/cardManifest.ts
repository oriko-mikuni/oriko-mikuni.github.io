import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {WagadouPowerA} from "./WagadouPowerA";
import {WagadouPowerB} from "./WagadouPowerB";
import {CityOfKoumbiSaleh} from "./CityOfKoumbiSaleh";
import {CityOfAoudaghost} from "./CityOfAoudaghost";
import {ControllingTheTrade} from "./ControllingTheTrade";
import {GreatMosqueOfDjenne} from "./GreatMosqueOfDjenne";
import {AdoptionOfIslam} from "./AdoptionOfIslam";
import {GreatWealth} from "./GreatWealth";
import {DingaCisse} from "./DingaCisse";
import {SaltMerchants} from "./SaltMerchants";
import {BerberTraders} from "./BerberTraders";
import {NigerRiverValley} from "./NigerRiverValley";
import {Bambouk} from "./Bambouk";
import {GoldenProsperity} from "./GoldenProsperity";
import {Unrest} from "./Unrest";
import {TransSaharanTradeRoute} from "./TransSaharanTradeRoute";
import {DharTichitt} from "./DharTichitt";
import {PactWithBida} from "./PactWithBida";
import {Guidimaka} from "./Guidimaka";
import {NorthernMali} from "./NorthernMali";
import {GoldMerchants} from "./GoldMerchants";
import {Pride} from "./Pride";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const WAG_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.WAGADOU,
    nationCards: {
        [CardName.WAGADOU_POWER_A]: {Factory: WagadouPowerA},
        [CardName.WAGADOU_POWER_B]: {Factory: WagadouPowerB},
        [CardName.CITY_OF_KOUMBI_SALEH]: {Factory: CityOfKoumbiSaleh},
        [CardName.CITY_OF_AOUDAGHOST]: {Factory: CityOfAoudaghost},
        [CardName.CONTROLLING_THE_TRADE]: {Factory: ControllingTheTrade},
        [CardName.GREAT_MOSQUE_OF_DJENNE]: {Factory: GreatMosqueOfDjenne},
        [CardName.ADOPTION_OF_ISLAM]: {Factory: AdoptionOfIslam},
        [CardName.GREAT_WEALTH]: {Factory: GreatWealth},
        [CardName.DINGA_CISSE]: {Factory: DingaCisse},
        [CardName.SALT_MERCHANTS]: {Factory: SaltMerchants},
        [CardName.BERBER_TRADERS]: {Factory: BerberTraders},
        [CardName.NIGER_RIVER_VALLEY]: {Factory: NigerRiverValley},
        [CardName.BAMBOUK]: {Factory: Bambouk},
        [CardName.GOLDEN_PROSPERITY]: {Factory: GoldenProsperity},
        [CardName.UNREST_WAG_NATION]: {Factory: Unrest},
        [CardName.TRANS_SAHARAN_TRADE_ROUTE]: {Factory: TransSaharanTradeRoute},
        [CardName.DHAR_TICHITT]: {Factory: DharTichitt},
        [CardName.PACT_WITH_BIDA]: {Factory: PactWithBida},
        [CardName.GUIDIMAKA]: {Factory: Guidimaka},
        [CardName.NORTHERN_MALI]: {Factory: NorthernMali},
        [CardName.GOLD_MERCHANTS]: {Factory: GoldMerchants},
        [CardName.PRIDE]: {Factory: Pride},
        [CardName.UNREST_WAG]: {Factory: Unrest1},
        [CardName.UNREST_WAG1]: {Factory: Unrest2},
    },
});
