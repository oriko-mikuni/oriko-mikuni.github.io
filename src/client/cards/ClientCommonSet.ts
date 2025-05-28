import {ClientCard} from "../../common/cards/ClientCard";
import {CommonSet, CommonSetName} from "../../server/commonSets/CommonSet";
import {getCard, getCards} from "./ClientCardsManifest";
import {CardName} from "../../common/cards/CardName";

export class ClientCommonSet {
    setName: CommonSetName;
    includeHorizons: boolean;
    mixed: boolean;

    groups: Array<[string, Array<ClientCard>]>;
    alternativeTributary: Array<[ClientCard, ClientCard]>;

    allCards: Array<ClientCard>;

    constructor(commonSet: CommonSet) {
        this.setName = commonSet.setName;
        this.includeHorizons = commonSet.includeHorizons;
        this.mixed = !!commonSet.mixed;

        let cards: Array<ClientCard>;
        this.allCards = [];
        this.groups = [];

        cards = getCards(commonSet.fame);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Fame", cards]);

        cards = getCards(commonSet.uncivilised);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Uncivilised", cards]);

        cards = getCards(commonSet.civilised);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Civilised", cards]);

        cards = getCards(commonSet.region);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Region", cards]);

        cards = getCards(commonSet.tributary);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Tributary", cards]);

        cards = getCards(commonSet.tradeRoute);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Trade Route", cards]);

        cards = getCards(commonSet.threePlayerAdd);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["3 Players", cards]);

        cards = getCards(commonSet.fourPlayerAdd);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["4 Players", cards]);

        cards = getCards(commonSet.tradeRouteExpansionRemove);
        if (cards.length > 0) this.groups.push(["Remove these cards when playing with Trade Route expansion", cards]);

        cards = getCards(commonSet.tradeRouteExpansionAdd);
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push(["Add these cards when playing with Trade Route expansion", cards]);

        this.alternativeTributary = [];
        commonSet.alternativeTributary.forEach(([name, name1]: [CardName, CardName]) => {
            const card: ClientCard | undefined = getCard(name);
            const card1: ClientCard | undefined = getCard(name1);
            if (card && card1) {
                this.alternativeTributary.push([card, card1]);
                this.allCards.push(card1);
            }
        });
    }
}
