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
    public static allCardNames: Array<CardName> = [];
    public static allCardUpdates: Partial<Record<CardName, CardName>> = {};
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
                const cardNameBeforeUpdate: CardName | undefined = getCardName(card.name.slice(0, card.name.length - 1));
                if (!cardNameBeforeUpdate)
                    throw new Error(`Cannot find original card enum [${card.name.slice(0, card.name.length - 1)}] of the updated card enum [${card.name}]`);
                this.allCardUpdates[cardNameBeforeUpdate] = cardNameEnum;
            } else {
                ClientCardsManifest.allCardNames.push(cardNameEnum);
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

export function allCardNames(): Array<CardName> {
    return ClientCardsManifest.allCardNames;
}

export function getCardUpdate(card: CardName): CardName {
    return ClientCardsManifest.allCardUpdates[card] ?? card;
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

ClientCardsManifest.initialize();
