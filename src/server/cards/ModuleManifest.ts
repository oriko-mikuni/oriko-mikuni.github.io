import { CardName } from "../../common/cards/CardName";
import { GameModule } from "../../common/cards/GameModule";
import { ICard } from "./ICard";
import { ICardFactory } from "./ICardFactory";

export type CardManifest<T extends ICard> = Partial<Record<CardName, ICardFactory<T>>>;

export namespace CardManifest {
  export function keys<T extends ICard>(manifest: CardManifest<T>): Array<CardName> {
    return Object.keys(manifest) as Array<CardName>;
  }
  export function values<T extends ICard>(manifest: CardManifest<T>): Array<ICardFactory<T>> {
    return Object.values(manifest) as Array<ICardFactory<T>>;
  }
  export function entries<T extends ICard>(manifest: CardManifest<T>): Array<[CardName, ICardFactory<T>]> {
    return keys(manifest).map((key) => {
      const value = manifest[key];
      if (value === undefined) {
        throw new Error(`Manifest has key ${key} but no entry.`);
      }
      return [key, value];
    });
  }
}

export class ModuleManifest {
  module: GameModule;
  commonCards: CardManifest<ICard>;
  nationCards: CardManifest<ICard>;
  cardsToRemove: Set<CardName>;
  constructor(arg: {
    module: GameModule,
    commonCards?: CardManifest<ICard>,
    nationCards?: CardManifest<ICard>,
    cardsToRemove?: Array<CardName>,
  }) {
    this.module = arg.module;
    this.commonCards = arg.commonCards || {};
    this.nationCards = arg.nationCards || {};
    this.cardsToRemove = new Set(arg.cardsToRemove || []);
  }
}