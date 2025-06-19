import {ClientCommonSet} from "../../cards/ClientCommonSet.ts";
import React from "react";
import CardGroup from "../CardGroup.tsx";
import {ItemGroup} from "../common/ItemGroup.tsx";
import CardArrowCard from "../CardArrowCard.tsx";
import {useTranslation} from "react-i18next";
import CardTextRender from "../card/CardTextRender.tsx";
import {CardName} from "../../../common/cards/CardName.ts";

export function CommonSetRender({commonSet, minimizeCard, onClickACard}: {
    commonSet?: ClientCommonSet,
    minimizeCard: boolean,
    onClickACard?: (arg0: CardName) => void
}): React.JSX.Element {
    const {t: commonSetsTranslation} = useTranslation("commonSets");
    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCommonSets"});

    const onClickText: undefined | ((arg0: string) => void) = onClickACard === undefined ? undefined : (
        (name: string): void => {
            if (name === "3FAM3") {
                onClickACard(CardName.WELCOMING);
            } else if (name === "MIXED_SET") {
                window.open("https://boardgamegeek.com/filepage/276362/imperium-mixed-common-card-sets","_blank");
            }
        });

    if (commonSet === undefined)
        return <CardTextRender isBlack={true} onClickText={onClickText} text={commonSetsTranslation("default.description")}/>;

    const alternativeTributaryGroup: React.JSX.Element | null = commonSet.alternativeTributary.length === 0 ? null :
        <ItemGroup groupName={uiTranslation("Tributary Replacement")}
                   items={commonSet.alternativeTributary} gap={"40px"}
                   ItemRender={({item}: { item: [CardName, CardName] }): React.JSX.Element =>
                       <CardArrowCard cardL={item[0]} cardR={item[1]} minimize={minimizeCard}
                                      onClickACard={onClickACard}/>}/>;

    const groups: Array<React.JSX.Element> = commonSet.groups.map(
        ([name, cards]: [string, Array<CardName>]): React.JSX.Element =>
            <CardGroup key={name}
                       groupName={uiTranslation(name)}
                       cards={cards}
                       minimize={minimizeCard}
                       onClickACard={onClickACard}/>);
    return <div>
        <h1>{commonSetsTranslation(commonSet.setName + ".name")}</h1>
        <CardTextRender isBlack={true} onClickText={onClickText} text={commonSetsTranslation(commonSet.setName + ".description")}/>
        {groups}
        {alternativeTributaryGroup}
    </div>;
}
