import { CardExpansion } from "../../common/cards/CardExpansion";

export interface ICardFactory<T> {
    Factory: new () => T;
    compatibility ?: CardExpansion | Array<CardExpansion>;
}
