import React from "react";
import CardRenderIconComponents from "./CardRenderIconComponents.tsx";
import {getIconByName} from "../../cards/IconNamesManifest.ts";

export function RenderCardText(effectText?: string) : Array<React.JSX.Element> | null {
    if (effectText === undefined) {
        return null;
    }
    const parts = effectText.split(/(\{[^\{\}]+\}|\[[^\[\]]+\]|\n)/g);

    return parts.map((part, index) => {
        const iconRender: {category: string, value: string} | undefined = getIconByName(part);
        if (iconRender) {
            return <CardRenderIconComponents iconName={iconRender} key={index}/>;
        } else {
            if (part === '\n') return <br key={index}/>;
            let italic: boolean = false;
            if (part.match(/\{([^{}]+)}|\[([^\[\]]+)\]/g)) {
                if (part.match(/\[([^\[\]]+)\]/g)) {
                    italic = true;
                }
                part = part.slice(1, part.length - 1);
            }
            return <span key={index} style={{fontStyle: italic ? 'italic' : ''}}>{part}</span>;
        }
    });
}
