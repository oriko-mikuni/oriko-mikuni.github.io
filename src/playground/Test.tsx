import React from "react";

function Test(
    {start = 14, end = 24, step = 1}:
    { start?: number, end?: number, step?: number }
): React.JSX.Element {
    const numberSequence: number[] = [];
    for (let i: number = start; i < end; i += step) {
        numberSequence.push(i);
    }

    const rend: React.JSX.Element[] = numberSequence.map((i) =>
        <div key={i}>
            <div> {i} </div>
            <svg width={i} height={i} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${i} ${i}`}>
                <clipPath id={`triangle-clip${i}`}>
                    <polygon points={`0,0 0,${i} ${i},${i}`}/>
                </clipPath>
                <linearGradient id={`grad${i}`} x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </linearGradient>
                <g fill={`url(#grad${i})`} clipPath={`url(#triangle-clip${i})`}>
                    <rect x="0" y="0" width={i} height={i}/>
                </g>
            </svg>
        </div>
    )

    const ti: number = 12;
    const rend1: React.JSX.Element = <div>
        <div> {ti} </div>
        <svg width={ti} height={ti} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${ti} ${ti}`}>
            <clipPath id="triangle-clip2">
                <polygon points={`0,0 0,${ti} ${ti},${ti}`}/>
            </clipPath>
            <g fill={'#997755'} clipPath="url(#triangle-clip2)">
                <rect x="0" y="0" width={ti} height={ti}/>
            </g>
        </svg>
    </div>

    const rend2: React.JSX.Element = <div>
        <div> 2</div>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <clipPath id="triangle-clip">
                <polygon points="0,0 0,24 24,24"/>
            </clipPath>
            <g fill={'#997755'} clipPath="url(#triangle-clip)">
                <rect x="0" y="0" width="24" height="24"/>
            </g>
        </svg>
    </div>

    return (
        <div>
            {rend}
            {rend1}
            {rend2}
        </div>
    )
}

export default Test;
