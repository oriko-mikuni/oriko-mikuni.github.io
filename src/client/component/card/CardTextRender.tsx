import React from "react";
import CardRenderIconComponents from "./CardRenderIconComponents.tsx";
import {getIconByName} from "../../icons/ClientIconManifest.ts";

export type CardTextRenderSharedProps = {
    minimize?: boolean;
    isBlack?: boolean;
    onClickText?: (arg0: string) => void;
};

export type CardTextRenderProps = CardTextRenderSharedProps & {
    text?: string;
    style?: string;
}

function CardTextRender(
    {text, style, ...shared}: CardTextRenderProps
) : React.JSX.Element | null {
    if (!text) return null;

    const elements: Array<React.JSX.Element> = [];
    const regex: RegExp = /(\{([^{}]+)})|(\n)|(\[([^\[\]]+)])|(\*([^*]+)\*)|(\\)|(<([^|>]+)\|([^>]+)>)/g;
    let muteNextPart: boolean = false;

    let lastIndex : number;
    let tryMatch: RegExpExecArray | null;
    for (lastIndex = 0; (tryMatch = regex.exec(text)) !== null; lastIndex = regex.lastIndex) {
        const match: RegExpExecArray = tryMatch;

        const before: string = text.slice(lastIndex, match.index);
        if (before) {
            elements.push(<span key={elements.length} className={style}>{before}</span>);
            muteNextPart = false;
        }

        const matchIdx: number | undefined = [1, 3, 4, 6, 8, 9].find(number => match[number]);

        if (muteNextPart) {
            if (matchIdx !== undefined)
                elements.push(<span key={elements.length} className={style}>{match[matchIdx]}</span>);
            muteNextPart = false;
            continue;
        }

        if (!matchIdx) continue;

        if (matchIdx === 3) {
            elements.push(<br key={elements.length}/>);
            continue;
        }

        if (matchIdx === 8) {
            muteNextPart = true;
            continue;
        }

        if (matchIdx === 1) {
            const iconRender: string | undefined = getIconByName(match[1]);
            if (iconRender) {
                elements.push(
                    <CardRenderIconComponents key={elements.length}
                                              iconName={iconRender}
                                              minimize={shared.minimize}
                                              isBlack={shared.isBlack}/>
                );
                continue;
            }
        }

        if (matchIdx === 9 && shared.onClickText !== undefined) {
            const {onClickText, isBlack, minimize} = shared;
            elements.push(<span key={elements.length}
                                className={"underline hover:cursor-pointer"}
                                onClick={(() => onClickText(match[11]))}>
                    <CardTextRender text={match[10]} style={style} isBlack={isBlack} minimize={minimize}/>
                </span>);
            continue;
        }

        const innerStyle: string | undefined =
            matchIdx === 4 ? (style ? style + " italic" : "italic") :
                matchIdx === 6 ? (style ? style + " font-bold" : "font-bold") :
                    style;

        elements.push(<CardTextRender key={elements.length}
                                      text={match[matchIdx+1]}
                                      style={innerStyle}
                                      {...shared}/>);
    }
    const rest: string = text.slice(lastIndex);
    if (rest) elements.push(<span key={elements.length} className={style}>{rest}</span>);

    return <>{elements}</>;
}

export default CardTextRender;
