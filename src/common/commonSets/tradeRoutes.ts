import {CommonSet, CommonSetName} from "./CommonSet";
import {CardName} from "../cards/CardName";

export const COMMON_TRADE_ROUTES: CommonSet = {
    setName: CommonSetName.TRADE_ROUTES,
    includeHorizons: true,
    fame: [
        CardName.WELCOMING
    ],
    uncivilised: [],
    civilised: [],
    region: [],
    tributary: [],
    tradeRoute: [
        CardName.CORNWALL_TIN_ROAD,
        CardName.LAPIS_LAZULI_TRADE,
        CardName.PHILIPPINES_JADE_TRADE,
        CardName.BALTIC_AMBER_ROAD,
        CardName.HOPEWELL_EXCHANGE_SYSTEM,
        CardName.SWAHILI_COAST,
        CardName.THE_NILE_CORRIDOR,
        CardName.ANDES_HIGHWAY
    ],
    threePlayerAdd: [
        CardName.MEDITERRANEAN_CIRCLE
    ],
    fourPlayerAdd: [],
    tradeRouteExpansionRemove: [],
    tradeRouteExpansionAdd: [],
    alternativeTributary: []
}
