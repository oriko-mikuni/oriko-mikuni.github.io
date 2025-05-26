import {ClientCommonSet} from "../../cards/ClientCommonSet.ts";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import React from "react";
import CardGroup from "../CardGroup.tsx";
import {ItemGroup} from "../common/ItemGroup.tsx";
import CardArrowCard from "../CardArrowCard.tsx";
import {useTranslation} from "react-i18next";
import CardTextRender from "../card/CardTextRender.tsx";
import {getCard} from "../../cards/ClientCardsManifest.ts";
import {CardName, getCardName} from "../../../common/cards/CardName.ts";

export function CommonSetRender({commonSet, minimizeCard, onClickACard}: {
    commonSet: ClientCommonSet,
    minimizeCard: boolean,
    onClickACard?: (arg0: ClientCard) => void
}): React.JSX.Element {
    const {t: commonSetsTranslation} = useTranslation("commonSets");
    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCommonSets"});

    const alternativeTributaryGroup: React.JSX.Element | null = commonSet.alternativeTributary.length === 0 ? null :
        <ItemGroup groupName={uiTranslation("Tributary Replacement")}
                   items={commonSet.alternativeTributary}
                   ItemRender={({item}: { item: [ClientCard, ClientCard] }): React.JSX.Element =>
                       <CardArrowCard cardL={item[0]} cardR={item[1]} minimize={minimizeCard}
                                      onClickACard={onClickACard}/>}/>;

    const onClickText: undefined | ((arg0: string) => void) = onClickACard === undefined ? undefined : (
        (name: string): void => {
            const cardName: CardName | undefined = getCardName(name);
            if (cardName) {
                const card: ClientCard | undefined = getCard(cardName);
                if (card) onClickACard(card);
            }
        });

    return <div>
        <h1>{commonSetsTranslation(commonSet.setName + ".name")}</h1>
        <CardTextRender isBlack={true} onClickText={onClickText} text={commonSetsTranslation(commonSet.setName + ".description")}/>
        <CardGroup groupName={uiTranslation("Fame")} cards={commonSet.fame} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Uncivilised")} cards={commonSet.uncivilised} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Civilised")} cards={commonSet.civilised} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Region")} cards={commonSet.region} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Tributary")} cards={commonSet.tributary} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("3 Players")} cards={commonSet.threePlayerAdd} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("4 Players")} cards={commonSet.fourPlayerAdd} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Remove these cards when playing with Trade Route expansion")} cards={commonSet.tradeRouteExpansionRemove} minimize={minimizeCard} onClickACard={onClickACard}/>
        <CardGroup groupName={uiTranslation("Add these cards when playing with Trade Route expansion")} cards={commonSet.tradeRouteExpansionAdd} minimize={minimizeCard} onClickACard={onClickACard}/>
        {alternativeTributaryGroup}
    </div>;
}
