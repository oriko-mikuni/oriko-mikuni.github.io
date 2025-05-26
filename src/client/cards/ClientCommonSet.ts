import {ClientCard} from "../../common/cards/ClientCard";
import {CommonSet, CommonSetName} from "../../server/commonSets/CommonSet";
import {getCard, getCards} from "./ClientCardsManifest";
import {CardName} from "../../common/cards/CardName";

export class ClientCommonSet {
    fame: Array<ClientCard>;
    uncivilised: Array<ClientCard>;
    civilised: Array<ClientCard>;
    region: Array<ClientCard>;
    tributary: Array<ClientCard>;
    threePlayerAdd: Array<ClientCard>;
    fourPlayerAdd: Array<ClientCard>;
    tradeRouteExpansionRemove: Array<ClientCard>;
    tradeRouteExpansionAdd: Array<ClientCard>;
    alternativeTributary: Array<[ClientCard, ClientCard]>;
    setName: CommonSetName;

    allCards: Array<ClientCard>;

    constructor(commonSet: CommonSet) {
        this.setName = commonSet.setName;
        this.fame = getCards(commonSet.fame);
        this.uncivilised = getCards(commonSet.uncivilised);
        this.civilised = getCards(commonSet.civilised);
        this.region = getCards(commonSet.region);
        this.tributary = getCards(commonSet.tributary);
        this.threePlayerAdd = getCards(commonSet.threePlayerAdd);
        this.fourPlayerAdd = getCards(commonSet.fourPlayerAdd);
        this.tradeRouteExpansionRemove = getCards(commonSet.tradeRouteExpansionRemove);
        this.tradeRouteExpansionAdd = getCards(commonSet.tradeRouteExpansionAdd);
        this.alternativeTributary = [];
        commonSet.alternativeTributary.forEach(([name, name1]: [CardName, CardName]) => {
            const card: ClientCard | undefined = getCard(name);
            const card1: ClientCard | undefined = getCard(name1);
            if (card && card1) this.alternativeTributary.push([card, card1]);
        });

        this.allCards = [
            ...this.fame,
            ...this.uncivilised,
            ...this.civilised,
            ...this.region,
            ...this.tributary,
            ...this.threePlayerAdd,
            ...this.fourPlayerAdd,
            ...this.tradeRouteExpansionAdd
        ];
        this.alternativeTributary.forEach(pair => this.allCards.push(pair[1]));
    }
}
