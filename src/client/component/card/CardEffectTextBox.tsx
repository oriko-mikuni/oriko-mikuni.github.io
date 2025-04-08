import React from "react";
import './styles/CardEffectTextBox.css';
import {RenderCardText} from "./CardText.tsx";
import {Units, UnitsUtils} from "../../../common/Units.ts";

function RenderDevelopmentCostBox(developmentCost?: Partial<Units>) : Array<React.JSX.Element> | null {
    if (UnitsUtils.isEmpty(developmentCost)) {
        return null;
    }
    const developmentCostDisplay: Array<React.JSX.Element> | null =
        RenderCardText("Development Cost: " + UnitsUtils.toString(developmentCost));

    return [<br key={0}/>, <div className="card-development-cost" key={1}>{developmentCostDisplay}</div>];
}

export function CardEffectTextBox(
    {effectText, developmentCost}:
    {effectText?: string, developmentCost?: Partial<Units>}
): React.JSX.Element | null {
    if (effectText !== undefined || developmentCost !== undefined) {
        let actualEffectText: string | undefined = effectText;
        let classes: string = "card-effect-text";

        if (actualEffectText !== undefined && actualEffectText.endsWith("^")) {
            actualEffectText = actualEffectText.slice(0, actualEffectText.length - 1);
            classes = classes + " card-effect-text-higher";
        }

        return <div className={classes}>
            {RenderCardText(actualEffectText)}
            {RenderDevelopmentCostBox(developmentCost)}
        </div>;
    } else {
        return null;
    }
}
