import React from 'react';
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import './styles/CardTitle.css';

const stateCardTitles: Array<string> = [
    'BARBARIAN',
    'EMPIRE',
    'FREE-TRIBES',
    'SUMMER',
    'WINTER',
    'ALIEN',
    'GONE-NATIVE',
    'ISLE-BOUND',
    'VOYAGING',
    'CORRUPTED',
    'SUMMONED'
]

function getCardTitleReplaceSpace(title: string): string {
    return title.replace(/[ _]/g, "-");
}

function getCardTitleWithoutSuffix(title: string): string {
    return title.split('#')[0].toUpperCase();
}

function isStateCardTitle(title: string): boolean {
    return stateCardTitles.includes(getCardTitleReplaceSpace(title));
}

function CardTitle(
    {title, banner = undefined}:
    {title: string, banner?: CardSuitIcon}
): React.JSX.Element {
    const titleDisplay: string = getCardTitleWithoutSuffix(title);
    const backgroundColorType: string | undefined = isStateCardTitle(titleDisplay) ? getCardTitleReplaceSpace(titleDisplay) : banner;

    return <div className={`card-title${titleDisplay.length > 20 ? " card-title-long" : ""}`}>
        <div className={`card-title-background-color card-title-background-color-${backgroundColorType}`}>
            {titleDisplay}
        </div>
    </div> ;
}

export default CardTitle;
