import React from "react";
import CardRenderIconComponents from "./CardRenderIconComponents.tsx";
import {getIconByName} from "../../cards/IconNamesManifest.ts";

function getClasses(italic: boolean, bold: boolean): string {
    const classes: Array<string> = [];
    if (italic) classes.push("italic");
    if (bold) classes.push("font-bold");
    return classes.join(" ");
}

function CardTextRender({text, minimize = false, isBlack = false}: {
    text?: string,
    minimize?: boolean
    isBlack?: boolean
}) : React.JSX.Element | null {
    if (text === undefined) {
        return null;
    }

    const parts: Array<string> = text.split(/(\{[^{}]+}|\[[^\[\]]+]|\*[^*]+\*|\n|\\)/g);
    let muteNextPart: boolean = false;

    const result: Array<React.JSX.Element> = parts.map((part, index) => {
        if (part === "") return <span key={index}></span>;
        const iconRender: string | undefined = getIconByName(part);
        let italic: boolean = false;
        let bold: boolean = false;
        if (muteNextPart) muteNextPart = false;
        else if (part === '\\') {muteNextPart = true; return <span key={index}></span>}
        else if (iconRender) return <CardRenderIconComponents iconName={iconRender} key={index} minimize={minimize} isBlack={isBlack}/>;
        else if (part === '\n') return <br key={index}/>;
        else if (part.match(/\{[^{}]+}|\[[^\[\]]+]|\*[^*]+\*/g)) {
            if (part.match(/\[[^\[\]]+]/g)) {
                italic = true;
            }
            if (part.match(/\*[^*]+\*/g)) {
                bold = true;
            }
            part = part.slice(1, part.length - 1);
        }
        return <span key={index} className={getClasses(italic, bold)}>{part}</span>;
    });

    return <>{result}</>;
}

export default CardTextRender;
