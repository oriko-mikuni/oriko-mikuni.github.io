import React from "react";
import './styles/CardRenderIconComponents.css';

function CardRenderIconComponents(
    {iconName, minimize = false}:
    {iconName: string, minimize?: boolean}
): React.JSX.Element {
    const iconCategory: string = iconName.split('-')[0];
    if (minimize && (iconCategory === "suit" || iconCategory === "type" || iconCategory === "state"))
        return <div className={`card-text-icon card-text-icon-${iconCategory}-minimize card-text-icon-${iconName}`}/>;
    return <div className={`card-text-icon card-text-icon-${iconCategory} card-text-icon-${iconName}`}/>;
}

export default CardRenderIconComponents;
