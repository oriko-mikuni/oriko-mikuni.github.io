import React from "react";
import './styles/CardRenderIconComponents.css';

function CardRenderIconComponents(
    {iconName}:
    {iconName: string}
): React.JSX.Element {
    return <img className={`card-text-icon card-text-icon-${iconName}`} alt={iconName}/>;
}

export default CardRenderIconComponents;
