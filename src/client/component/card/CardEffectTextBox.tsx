import React from "react";
import './styles/CardEffectTextBox.css';
import {RenderCardText} from "./CardText.tsx";
import {Units, UnitsUtils} from "../../../common/Units.ts";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse.ts";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

function RenderDevelopmentCostBox(
    translation: TFunction<string, string>,
    developmentCost: Partial<Units> | undefined,
    developmentCostString: Array<string>
) : Array<React.JSX.Element> | null {
    if (UnitsUtils.isEmpty(developmentCost) && developmentCostString.length === 0) {
        return null;
    }

    const developmentCostDisplay: Array<React.JSX.Element> | null =
        RenderCardText(
            translation("Development Cost: ") +
            (UnitsUtils.toString(developmentCost) ?? "") +
            developmentCostString.map(string => translation(string)).join("\n")
        );

    return [<br key={0}/>, <div className="card-development-cost" key={1}>{developmentCostDisplay}</div>];
}

export function CardEffectTextBox(
    {effectText, developmentCost, developmentCostString}:
    {effectText: Array<string>, developmentCost?: Partial<Units>, developmentCostString: Array<string>}
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
            actualEffectText.map(text => translation(text)).join("\n");

    if (actualEffectText.length > 0 || developmentCost !== undefined) {
        return <div className={classes}>
            {RenderCardText(finalEffectText)}
            {RenderDevelopmentCostBox(translation, developmentCost, developmentCostString)}
        </div>;
    } else {
        return null;
    }
}
