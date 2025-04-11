import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest} from "./Unrest";
import {ArthuriansPowerA} from "./ArthuriansPowerA";
import {ArthuriansPowerB} from "./ArthuriansPowerB";
import {KingArthurSCourt} from "./KingArthurSCourt";
import {Graal} from "./Graal";
import {LawnslotLlynSirLancelot} from "./LawnslotLlynSirLancelot";
import {TwrchTrwyth} from "./TwrchTrwyth";
import {TaliesinTheBard} from "./TaliesinTheBard";
import {Excalibur} from "./Excalibur";
import {GwaithCamlan} from "./GwaithCamlan";
import {Bedwyr} from "./Bedwyr";
import {VivianeOfTheLake} from "./VivianeOfTheLake";
import {CityOfCamelot} from "./CityOfCamelot";
import {BritanniaFlavia} from "./BritanniaFlavia";
import {YnysAfallachAvalon} from "./YnysAfallachAvalon";
import {GwalchmeiSirGawain} from "./GwalchmeiSirGawain";
import {LadyBertilak} from "./LadyBertilak";
import {Morigena} from "./Morigena";
import {PeredurSirPercival} from "./PeredurSirPercival";
import {CaiSirKay} from "./CaiSirKay";
import {KingArthur} from "./KingArthur";
import {UthyrPendragon} from "./UthyrPendragon";
import {BritanniaPrima} from "./BritanniaPrima";
import {BritanniaSecunda} from "./BritanniaSecunda";
import {MyrddinWylltMerlin} from "./MyrddinWylltMerlin";
import {Guennuvar} from "./Guennuvar";
import {Cafall} from "./Cafall";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {GameModule} from "../../../common/cards/GameModule";

export const ART_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.ARTHURIANS,
    nationCards: {
        [CardName.ARTHURIANS_POWER_A]: {Factory: ArthuriansPowerA},
        [CardName.ARTHURIANS_POWER_B]: {Factory: ArthuriansPowerB},
        [CardName.KING_ARTHUR_S_COURT]: {Factory: KingArthurSCourt},
        [CardName.GRAAL]: {Factory: Graal},
        [CardName.LAWNSLOT_LLYN_SIR_LANCELOT]: {Factory: LawnslotLlynSirLancelot},
        [CardName.TWRCH_TRWYTH]: {Factory: TwrchTrwyth},
        [CardName.TALIESIN_THE_BARD]: {Factory: TaliesinTheBard},
        [CardName.EXCALIBUR]: {Factory: Excalibur},
        [CardName.GWAITH_CAMLAN]: {Factory: GwaithCamlan},
        [CardName.BEDWYR]: {Factory: Bedwyr},
        [CardName.VIVIANE_OF_THE_LAKE]: {Factory: VivianeOfTheLake},
        [CardName.CITY_OF_CAMELOT]: {Factory: CityOfCamelot},
        [CardName.BRITANNIA_FLAVIA]: {Factory: BritanniaFlavia},
        [CardName.YNYS_AFALLACH_AVALON]: {Factory: YnysAfallachAvalon},
        [CardName.GWALCHMEI_SIR_GAWAIN]: {Factory: GwalchmeiSirGawain},
        [CardName.LADY_BERTILAK]: {Factory: LadyBertilak},
        [CardName.MORIGENA]: {Factory: Morigena},
        [CardName.PEREDUR_SIR_PERCIVAL]: {Factory: PeredurSirPercival},
        [CardName.CAI_SIR_KAY]: {Factory: CaiSirKay},
        [CardName.KING_ARTHUR]: {Factory: KingArthur},
        [CardName.UTHYR_PENDRAGON]: {Factory: UthyrPendragon},
        [CardName.BRITANNIA_PRIMA]: {Factory: BritanniaPrima},
        [CardName.BRITANNIA_SECUNDA]: {Factory: BritanniaSecunda},
        [CardName.MYRDDIN_WYLLT_MERLIN]: {Factory: MyrddinWylltMerlin},
        [CardName.GUENNUVAR]: {Factory: Guennuvar},
        [CardName.CAFALL]: {Factory: Cafall},
        [CardName.UNREST_ART_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_ART_SUPPLY_1]: {Factory: Unrest1},
        [CardName.UNREST_ART_SUPPLY3]: {Factory: Unrest2},
        [CardName.UNREST_ART_SUPPLY4]: {Factory: Unrest3},
    },
});
