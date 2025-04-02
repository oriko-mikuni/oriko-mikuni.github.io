import cardJson from '../../genfiles/cards.json';
import {CardName} from "../../common/cards/CardName";
import {ClientCard} from "../../common/cards/ClientCard";

class ClientCardsManifest {
    public static cards: Map<CardName, ClientCard> = new Map();
    public static allCards: Array<ClientCard> = [];
    public static cardDict: Array<[string, Array<ClientCard>]> = [];
    public static initialize(): void {
        Object.entries(cardJson as Record<string, Array<ClientCard>>).forEach(([module, cards]: [string, Array<ClientCard>]): void => {
            const curModule: Array<ClientCard> = [];
            ClientCardsManifest.cardDict.push([module, curModule]);

            cards.forEach((card: ClientCard): void => {
                ClientCardsManifest.cards.set(card.name, card);
                ClientCardsManifest.allCards.push(card);
                curModule.push(card);
            })
        });

    }

}

export function allCards(): Array<ClientCard> {
    return ClientCardsManifest.allCards;
}

export function allModules(): Array<[string, Array<ClientCard>]> {
    return ClientCardsManifest.cardDict;
}

export function getCard(cardName: CardName): ClientCard | undefined {
    return ClientCardsManifest.cards.get(cardName);
}

ClientCardsManifest.initialize();
