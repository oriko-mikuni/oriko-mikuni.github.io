import React from "react";
import {allModules} from '../cards/ClientCardsManifest';
import {ClientCard} from "../../common/cards/ClientCard";
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import ImperiumCardporiumHead from "./ImperiumCardporiumHead.tsx";

function ImperiumCardporium(): React.JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    // const cardListElements: Array<React.JSX.Element> = allCards().map((card: ClientCard, idx: number) =>
    //     <div className="cardBox" key={idx}><Card card={card} /></div>);
    const cardModuleElements: Array<React.JSX.Element> =
        allModules().map(
            (
                [module, cards]: [module: string, cards: Array<ClientCard>],
                idx: number
            ): React.JSX.Element => <CardGroup module={module} cards={cards} key={idx}/>
        );
    return <div>
        <button onClick={(): void | Promise<void> => navigate("/")}>&lt;-- back</button>
        <ImperiumCardporiumHead/>
        {cardModuleElements}
    </div>;
}

export default ImperiumCardporium;
