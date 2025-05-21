import React from 'react';
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";

type CardHeaderIconPosition = 'left' | 'right' | 'inline';

const headerIconStyle: Record<CardHeaderIconPosition, string> = {
    'left': "flex absolute size-[20px] bg-cover object-cover top-0 left-[4px] bg-card-header-",
    'right': "flex absolute size-[20px] bg-cover object-cover top-0 right-[4px] bg-card-header-",
    'inline': "flex size-[24px] bg-cover text-transparent bg-card-header-",
}

function CardHeaderIconDisplay(
    {headerIcon, position = 'inline'}:
    {headerIcon?: CardHeaderIcon, position?: CardHeaderIconPosition}
): React.JSX.Element {
    return <div className={headerIconStyle[position] + headerIcon}>{position === 'inline' ? '?' : null}</div>
}

export default CardHeaderIconDisplay;
