import React from "react";

const cardIconStyle: Record<string, string> = {
    'suit': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] rounded-full text-transparent",
    'type': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] rounded-full text-transparent",
    'state': "relative inline-flex bg-cover w-[1.44em] h-[1.2em] text-transparent",
    'header': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] text-transparent",
    'location': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] text-transparent",
    'resource': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] text-transparent",
    'expansion': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] text-transparent",
    'vp': "relative inline-flex bg-cover w-[1.4em] h-[1.4em] text-transparent",
}

const cardIconStyleMinimize: Record<string, string> = {
    'suit': "relative inline-flex align-text-top bg-cover w-[1em] h-[1em] rounded-full border border-white border-solid text-transparent",
    'type': "relative inline-flex align-middle bg-cover w-[1em] h-[1em] rounded-full border border-white border-solid text-transparent",
    'state': "relative inline-flex align-middle bg-cover w-[1.22em] h-[1em] border border-white border-solid text-transparent",
    'header': "relative inline-flex align-middle bg-cover w-[1em] h-[1em] text-transparent",
    'location': "relative inline-flex align-text-top bg-cover w-[1em] h-[1em] text-transparent",
    'resource': "relative inline-flex align-text-top bg-cover w-[1em] h-[1em] text-transparent",
    'expansion': "relative inline-flex bg-cover w-[1em] h-[1em] text-transparent",
    'vp': "relative inline-flex bg-cover w-[1.2em] h-[1.2em] text-transparent",
}

function CardRenderIconComponents(
    {iconName, minimize = false, isBlack = false}:
    {iconName: string, minimize?: boolean, isBlack?: boolean}
): React.JSX.Element {
    const iconCategory: string = iconName.split('-')[0];
    return <div className={
        (minimize ? cardIconStyleMinimize[iconCategory] : cardIconStyle[iconCategory])
        + " bg-card-" + iconName + (iconCategory === 'location' && isBlack ? "-black" : "")}>
        {minimize ? "" : "?"}
    </div>;
}

export default CardRenderIconComponents;
