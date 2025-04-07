import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {MauryansPowerA} from "./MauryansPowerA";
import {MauryansPowerB} from "./MauryansPowerB";
import {Glory} from "./Glory";
import {Mathematics} from "./Mathematics";
import {GrandTrunkRoad} from "./GrandTrunkRoad";
import {Ashoka} from "./Ashoka";
import {Buddhism} from "./Buddhism";
import {EdictsOfAshoka} from "./EdictsOfAshoka";
import {PunchMarkedCoins} from "./PunchMarkedCoins";
import {Arthashastra} from "./Arthashastra";
import {NandaDynasty} from "./NandaDynasty";
import {CityOfPataliputra} from "./CityOfPataliputra";
import {IndianElephants} from "./IndianElephants";
import {IndianElephantsB} from "./IndianElephantsB";
import {Gandhara} from "./Gandhara";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Advance} from "./Advance";
import {Chandragupta} from "./Chandragupta";
import {Chanakya} from "./Chanakya";
import {Magadha} from "./Magadha";
import {IndusValley} from "./IndusValley";
import {Prosperity} from "./Prosperity";

export const MAU_CARD_MANIFEST = new ModuleManifest({
    module: 'Mauryans',
    nationCards: {
        [CardName.MAURYANS_POWER_A]: {Factory: MauryansPowerA},
        [CardName.MAURYANS_POWER_B]: {Factory: MauryansPowerB},
        [CardName.GLORY_MAU]: {Factory: Glory},
        [CardName.MATHEMATICS_MAU]: {Factory: Mathematics},
        [CardName.GRAND_TRUNK_ROAD]: {Factory: GrandTrunkRoad},
        [CardName.ASHOKA]: {Factory: Ashoka},
        [CardName.BUDDHISM]: {Factory: Buddhism},
        [CardName.EDICTS_OF_ASHOKA]: {Factory: EdictsOfAshoka},
        [CardName.PUNCH_MARKED_COINS]: {Factory: PunchMarkedCoins},
        [CardName.ARTHASHASTRA]: {Factory: Arthashastra},
        [CardName.NANDA_DYNASTY]: {Factory: NandaDynasty},
        [CardName.CITY_OF_PATALIPUTRA]: {Factory: CityOfPataliputra},
        [CardName.INDIAN_ELEPHANTS]: {Factory: IndianElephants},
        [CardName.INDIAN_ELEPHANTS_B]: {Factory: IndianElephantsB},
        [CardName.GANDHARA]: {Factory: Gandhara},
        [CardName.UNREST_MAU_NATION]: {Factory: Unrest},
        [CardName.UNREST_MAU_NATION1]: {Factory: Unrest1},
        [CardName.ADVANCE_MAU]: {Factory: Advance},
        [CardName.CHANDRAGUPTA]: {Factory: Chandragupta},
        [CardName.CHANAKYA]: {Factory: Chanakya},
        [CardName.MAGADHA]: {Factory: Magadha},
        [CardName.INDUS_VALLEY]: {Factory: IndusValley},
        [CardName.PROSPERITY_MAU]: {Factory: Prosperity},
        [CardName.UNREST_MAU]: {Factory: Unrest2},
        [CardName.UNREST_MAU1]: {Factory: Unrest3},
    },
});
