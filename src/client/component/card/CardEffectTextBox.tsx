import React from "react";
import CardTextRender from "./CardTextRender.tsx";
import {Units, UnitsUtils} from "../../../common/Units.ts";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse.ts";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

const effectTextBottom: Array<string> = ["bottom-[40px]", "bottom-[52px]", "bottom-[64px]"];

function RenderDevelopmentCostBox(
    translation: TFunction<string, string>,
    developmentCost: Partial<Units> | undefined,
    developmentCostString: Array<string>,
    hasEffectText: boolean,
    diy: boolean
) : Array<React.JSX.Element> | null {
    if (UnitsUtils.isEmpty(developmentCost) && developmentCostString.length === 0) {
        return null;
    }

    const developmentCostResource: string = UnitsUtils.developmentCostToString(developmentCost ?? {});
    const developmentCostDisplay: React.JSX.Element | null =
        <CardTextRender text={
            (!developmentCostResource ? "" : translation("Development cost: ") + developmentCostResource)
            + (diy ? developmentCostString.join("\n") : developmentCostString.map(string => translation(string)).join("\n"))
        }/>;

    if (!hasEffectText) return [<div className="inline-block mt-[4px] p-[2px] bg-white text-black" key={0}>{developmentCostDisplay}</div>];
    return [<br key={1}/>, <div className="inline-block mt-[4px] p-[2px] bg-white text-black" key={0}>{developmentCostDisplay}</div>];
}

export function CardEffectTextBox(
    {effectText, developmentCost, developmentCostString, diy = false}:
    {effectText: Array<string>, developmentCost?: Partial<Units>, developmentCostString: Array<string>, diy?: boolean}
): React.JSX.Element | null {
    let actualEffectText: Array<string> = effectText;

    let higher: number = 0;
    while (actualEffectText.length > 0 && actualEffectText[actualEffectText.length - 1] === CardEffectReuse.bumpUpTextBox) {
        actualEffectText = actualEffectText.slice(0, actualEffectText.length - 1);
        higher++;
    }

    const {t: translation} = useTranslation("cardEffect");
    const finalEffectText: string | undefined =
        actualEffectText.length === 0 ? undefined :
            diy ? actualEffectText.join("\n") :
                actualEffectText.map(text => translation(text)).join("\n");

    if (actualEffectText.length > 0 || developmentCost !== undefined) {
        const classes: string = effectTextBottom[Math.min(higher, 2)] +
            " absolute text-[10px] leading-[13px] inset-x-[10px] py-[5px] bg-[#000000c0] text-white text-center";

        return <div className={classes}>
            <CardTextRender text={finalEffectText}/>
            {RenderDevelopmentCostBox(translation, developmentCost, developmentCostString, actualEffectText.length > 0, diy)}
        </div>;
    } else {
        return null;
    }
}
