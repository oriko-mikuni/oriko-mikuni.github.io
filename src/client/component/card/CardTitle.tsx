import React from 'react';
import {CardSuitIcon, getSuitCardTitleColour} from "../../../common/cards/CardSuitIcon";
import {getCustomCardTitleColour} from "../../../common/cards/CardName.ts";
import {useTranslation} from "react-i18next";
import CardTextRender from "./CardTextRender.tsx";

function getCardTitleDisplay(title: string): string {
    return title.toUpperCase();
}

const cardTitleStyle: string = "w-full text-[15px] leading-[20px] text-center font-bold overflow-hidden whitespace-nowrap mt-[15px] pt-[5px] tracking-[1px]";
const cardTitleLongStyle: string = "w-full text-[15px] leading-[20px] text-center font-bold overflow-hidden whitespace-nowrap mt-[15px] pt-[5px]";
const cardTitleVeryLongStyle: string = "w-full text-[14px] leading-[20px] text-center font-bold overflow-hidden whitespace-nowrap mt-[15px] pt-[5px]";

function CardTitle(
    {title, banner = undefined, diy = false, exhaustCount}:
    {title: string, banner?: CardSuitIcon, diy?: boolean, exhaustCount?: number}
): React.JSX.Element {
    const {t: titleTranslation} = useTranslation("cardName");

    const titleDisplay: string = getCardTitleDisplay(diy ? title : titleTranslation(title));
    const titleColour: string = getCustomCardTitleColour(title) || getSuitCardTitleColour(banner);
    const specialExhaustCount: React.JSX.Element | null =
        exhaustCount === undefined ? null :
            <div className="absolute top-[5px] right-[30px] text-white font-bold">
                <CardTextRender text={exhaustCount + "{exhaust}"}/>
            </div>

    const className: string = titleDisplay.length >= 25 ? cardTitleVeryLongStyle :
        titleDisplay.length > 20 ? cardTitleLongStyle : cardTitleStyle;
    return <div className={className}>
        <div className={titleColour + " h-[20px] items-center justify-center"}>{titleDisplay}</div>
        {specialExhaustCount}
    </div> ;
}

export default CardTitle;
