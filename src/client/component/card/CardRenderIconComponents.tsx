import React from "react";
import './styles/CardRenderIconComponents.css';

function CardRenderIconComponents(
    {iconName}:
    {iconName: {category: string, value: string}}
): React.JSX.Element {
    return <img className={`card-text-icon card-text-icon-${iconName.category}-${iconName.value}`} alt={iconName.value}/>;
}

export default CardRenderIconComponents;
