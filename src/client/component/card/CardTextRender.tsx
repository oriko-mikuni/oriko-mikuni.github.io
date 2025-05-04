import React from "react";
import CardRenderIconComponents from "./CardRenderIconComponents.tsx";
import {getIconByName} from "../../cards/IconNamesManifest.ts";

function getClasses(italic: boolean, bold: boolean): string {
    const classes: Array<string> = [];
    if (italic) classes.push("text-italic");
    if (bold) classes.push("text-bold");
    return classes.join(" ");
}

function CardTextRender({text}: {
    text?: string
}) : React.JSX.Element | null {
    if (text === undefined) {
        return null;
    }
    // const {t} = useTranslation("cardName");
    // const splitNameRef: Array<string> = text.split("/(@[^@]+@)/g");
    // const resolveNameRefResult: string = splitNameRef.map(part => {
    //     if (!part.match(/@[^@]+@/g)) return part.replace("@", "");
    //     part = part.replace("@", "");
    //     if (isCardName(part)) {
    //         part = t("card_name_reference", {cardName: t(part)});
    //     }
    //     return part;
    // }).join("");

    const parts: Array<string> = text.split(/(\{[^{}]+}|\[[^\[\]]+]|\*[^*]+\*|\n)/g);

    const result: Array<React.JSX.Element> = parts.map((part, index) => {
        const iconRender: string | undefined = getIconByName(part);
        if (iconRender)
            return <CardRenderIconComponents iconName={iconRender} key={index}/>;
        else {
            if (part === '\n') return <br key={index}/>;
            let italic: boolean = false;
            let bold: boolean = false;
            if (part.match(/\{[^{}]+}|\[[^\[\]]+]|\*[^*]+\*/g)) {
                if (part.match(/\[[^\[\]]+]/g)) {
                    italic = true;
                }
                if (part.match(/\*[^*]+\*/g)) {
                    bold = true;
                }
                part = part.slice(1, part.length - 1);
            }
            return <span
                key={index}
                className={getClasses(italic, bold)}
            >
                {part}
            </span>;
        }
    });

    return <>{result}</>;
}

export default CardTextRender;
