import {CommonSet, CommonSetName} from "../../common/commonSets/CommonSet";
import {CardName} from "../../common/cards/CardName";

export class ClientCommonSet {
    setName: CommonSetName;
    includeHorizons: boolean;
    mixed: boolean;

    groups: Array<[string, Array<CardName>]>;
    alternativeTributary: Array<[CardName, CardName]>;

    allCards: Array<CardName>;

    public addGroup(name: string, cards: Array<CardName>): void {
        this.allCards.push(...cards);
        if (cards.length > 0) this.groups.push([name, cards]);
    }

    constructor(commonSet: CommonSet) {
        this.setName = commonSet.setName;
        this.includeHorizons = commonSet.includeHorizons;
        this.mixed = !!commonSet.mixed;

        this.allCards = [];
        this.groups = [];

        this.addGroup("Fame", commonSet.fame);
        this.addGroup("Uncivilised", commonSet.uncivilised);
        this.addGroup("Civilised", commonSet.civilised);
        this.addGroup("Region", commonSet.region);
        this.addGroup("Tributary", commonSet.tributary);
        this.addGroup("Trade Route", commonSet.tradeRoute);
        this.addGroup("3 Players", commonSet.threePlayerAdd);
        this.addGroup("4 Players", commonSet.fourPlayerAdd);
        this.addGroup("Fame", commonSet.fame);
        this.addGroup("Add these cards when playing with Trade Route expansion", commonSet.tradeRouteExpansionAdd);

        if (commonSet.tradeRouteExpansionRemove.length > 0)
            this.groups.push(["Remove these cards when playing with Trade Route expansion", commonSet.tradeRouteExpansionRemove]);

        this.alternativeTributary = [];
        commonSet.alternativeTributary.forEach(([name, name1]: [CardName, CardName]) => {
            this.alternativeTributary.push([name, name1]);
            this.allCards.push(name1);
        });
    }
}
