export interface ICardFactory<T> {
    Factory: new () => T;
}
