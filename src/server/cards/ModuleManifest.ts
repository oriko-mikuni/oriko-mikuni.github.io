import { CardName } from "../../common/cards/CardName";
import { GameModule } from "../../common/cards/GameModule";
import { ICard } from "./ICard";
import { ICardFactory } from "./ICardFactory";

export type CardManifest<T extends ICard> = Partial<Record<CardName, ICardFactory<T>>>;

export function cardManifestValues<T extends ICard>(manifest: CardManifest<T>): Array<ICardFactory<T>> {
  return Object.values(manifest) as Array<ICardFactory<T>>;
}

export class ModuleManifest {
  module: GameModule;
  commonCards: CardManifest<ICard>;
  nationCards: CardManifest<ICard>;
  cardsToRemove: Set<CardName>;

  constructor(arg: {
    module: GameModule;
    nationCards?: CardManifest<ICard>;
    commonCards?: CardManifest<ICard>;
    cardsToRemove?: Array<CardName>;
  }) {
    this.module = arg.module;
    this.commonCards = arg.commonCards || {};
    this.nationCards = arg.nationCards || {};
    this.cardsToRemove = new Set(arg.cardsToRemove || []);
  }
}
