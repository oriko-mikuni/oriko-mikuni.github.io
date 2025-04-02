import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import pageTitle from "./PageTitle.tsx";

function Homepage() : React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    return <div>
        <button onClick={(): void | Promise<void> => navigate('/cards')}> imperium card list </button>
        <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/'> source </a>
        <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
    </div>
}

export default Homepage;
