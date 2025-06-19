import {Units} from "../Units";
import {CardName} from "../cards/CardName";

export interface CardModel {
    name?: CardName;
    resourcesUpon?: Partial<Units>;
    isExhausted?: boolean;
    garrisonedCards?: Array<CardName>;
    warning?: string;
    location?: string;
}
