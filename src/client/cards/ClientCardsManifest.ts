import cardJson from '../../genfiles/cards.json';
import {CardName, getCardName} from "../../common/cards/CardName";
import {ClientCard, VictoryPoints} from "../../common/cards/ClientCard";
import {GameModule} from "../../common/cards/GameModule";

export const horizonModules: Set<GameModule> = new Set<GameModule>([
        GameModule.HORIZONS_COMMON,
        GameModule.TRADE_ROUTE_EXPANSION,
        GameModule.HORIZONS_UPDATE,
        // horizons nations
        GameModule.ABBASIDS,
        GameModule.AKSUMITES,
        GameModule.CULTISTS,
        GameModule.GUPTAS,
        GameModule.INUIT,
        GameModule.JAPANESE,
        GameModule.MAGYARS,
        GameModule.MAYANS,
        GameModule.MARTIANS,
        GameModule.POLYNESIANS,
        GameModule.SASSANIDS,
        GameModule.TAINO,
        GameModule.TANG,
        GameModule.WAGADOU
]);

class ClientCardsManifest {
    public static cards: Map<CardName, ClientCard> = new Map();
    public static allCards: Array<ClientCard> = [];
    public static allCardUpdates: Record<string, ClientCard> = {};
    public static allVictoryPoints: Array<string> = [];
    public static allGameModules: Array<GameModule> = [];
    public static initialize(): void {
        const vpSet: Set<VictoryPoints> = new Set();
        const gameModuleSet: Set<GameModule> = new Set();
        (cardJson as Array<ClientCard>).forEach((card: ClientCard): void => {
            const cardNameEnum: CardName | undefined = getCardName(card.name);
            if (cardNameEnum === undefined) return;
            ClientCardsManifest.cards.set(cardNameEnum, card);
            if (card.cardNumber !== undefined && card.cardNumber.endsWith("X")) {
                const cardNumberToUpdate: string = card.cardNumber.slice(0, card.cardNumber.length - 1);
                this.allCardUpdates[cardNumberToUpdate] = card;
            } else {
                ClientCardsManifest.allCards.push(card);
            }
            if (!vpSet.has(card.victoryPoints)) vpSet.add(card.victoryPoints);
            if (!gameModuleSet.has(card.gameModule)) gameModuleSet.add(card.gameModule);
        });
        this.allGameModules = [];
        gameModuleSet.forEach(gm => this.allGameModules.push(gm));
        this.allGameModules.sort();

        const vpArray: Array<VictoryPoints> = [];
        vpSet.forEach(vp => vpArray.push(vp));
        vpArray.sort((a, b) => {
            if ((typeof a === 'number') !== (typeof b === 'number'))
                return typeof a === 'number' ? -1 : 1;
            return a < b ? -1 : 1;
        });
        this.allVictoryPoints = vpArray.map(vp => vp.toString());
    }
}

export function allCards(): Array<ClientCard> {
    return ClientCardsManifest.allCards;
}

export function getCardUpdate(card: ClientCard): ClientCard {
    return card.cardNumber !== undefined ? ClientCardsManifest.allCardUpdates[card.cardNumber] ?? card : card;
}

export function allVictoryPoints(): Array<string> {
    return ClientCardsManifest.allVictoryPoints;
}

export function allGameModules(): Array<GameModule> {
    return ClientCardsManifest.allGameModules;
}

export function getCard(cardName: CardName): ClientCard | undefined {
    return ClientCardsManifest.cards.get(cardName);
}

export function getCards(cardNames: Array<CardName>): Array<ClientCard> {
    const result: Array<ClientCard> = [];
    cardNames.forEach(name => {
        const card: ClientCard | undefined = getCard(name);
        if (card) result.push(card);
    })
    return result;
}

ClientCardsManifest.initialize();
