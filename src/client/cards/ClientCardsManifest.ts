import cardJson from '../../genfiles/cards.json';
import {CardName} from "../../common/cards/CardName";
import {ClientCard, VictoryPoints} from "../../common/cards/ClientCard";

class ClientCardsManifest {
    public static cards: Map<CardName, ClientCard> = new Map();
    public static allCards: Array<ClientCard> = [];
    public static cardDict: Array<[string, Array<ClientCard>]> = [];
    public static victoryPoints: Array<string> = [];
    public static initialize(): void {
        const vpSet: Set<VictoryPoints> = new Set();
        Object.entries(cardJson as Record<string, Array<ClientCard>>).forEach(([module, cards]: [string, Array<ClientCard>]): void => {
            const curModule: Array<ClientCard> = [];
            ClientCardsManifest.cardDict.push([module, curModule]);

            cards.forEach((card: ClientCard): void => {
                ClientCardsManifest.cards.set(card.name, card);
                ClientCardsManifest.allCards.push(card);
                curModule.push(card);
                if (card.victoryPoints !== undefined) {
                    if (!vpSet.has(card.victoryPoints)) {
                        vpSet.add(card.victoryPoints);
                    }
                }
            })
        });
        const vpArray: Array<VictoryPoints> = [];
        vpSet.forEach(vp => vpArray.push(vp));
        vpArray.sort((a, b) => {
            if ((typeof a === 'number') !== (typeof b === 'number'))
                return typeof a === 'number' ? -1 : 1;
            return a < b ? -1 : 1;
        });
        this.victoryPoints = vpArray.map(vp => vp.toString());
    }
}

export function allCards(): Array<ClientCard> {
    return ClientCardsManifest.allCards;
}

export function allVictoryPoints(): Array<string> {
    return ClientCardsManifest.victoryPoints;
}

export function getCard(cardName: CardName): ClientCard | undefined {
    return ClientCardsManifest.cards.get(cardName);
}

ClientCardsManifest.initialize();
