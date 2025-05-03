import React from "react";
import './styles/CardEffectTextBox.css';
import CardTextRender from "./CardTextRender.tsx";
import {Units, UnitsUtils} from "../../../common/Units.ts";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse.ts";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

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

    const developmentCostResource: string | undefined = UnitsUtils.toString(developmentCost);
    const developmentCostDisplay: React.JSX.Element | null =
        <CardTextRender text={
                (
                    developmentCostResource === undefined ? "" :
                        translation("Development Cost: ") + developmentCostResource
                ) + (
                    diy ? developmentCostString.join("\n") :
                        developmentCostString.map(string => translation(string)).join("\n")
                )
        }/>;

    if (!hasEffectText) return [<div className="card-development-cost" key={0}>{developmentCostDisplay}</div>];
    return [<br key={0}/>, <div className="card-development-cost" key={1}>{developmentCostDisplay}</div>];
}

export function CardEffectTextBox(
    {effectText, developmentCost, developmentCostString, diy = false}:
    {effectText: Array<string>, developmentCost?: Partial<Units>, developmentCostString: Array<string>, diy?: boolean}
): React.JSX.Element | null {
    let actualEffectText: Array<string> = effectText;
    let classes: string = "card-effect-text";
    let higherTextClass: string = " card-effect-text";
    while (actualEffectText.length > 0 && actualEffectText[actualEffectText.length - 1] === CardEffectReuse.bumpUpTextBox)
    {
        actualEffectText = actualEffectText.slice(0, actualEffectText.length - 1);
        higherTextClass = higherTextClass + "-higher";
        classes = classes + higherTextClass;
    }

    const {t: translation} = useTranslation("cardEffect");
    const finalEffectText: string | undefined =
        actualEffectText.length === 0 ? undefined :
            diy ? actualEffectText.join("\n") :
                actualEffectText.map(text => translation(text)).join("\n");

    if (actualEffectText.length > 0 || developmentCost !== undefined) {
        return <div className={classes}>
            <CardTextRender text={finalEffectText}/>
            {RenderDevelopmentCostBox(translation, developmentCost, developmentCostString, actualEffectText.length > 0, diy)}
        </div>;
    } else {
        return null;
    }
}
