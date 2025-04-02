import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";

function Homepage() : React.JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return <div>
        <button onClick={(): void | Promise<void> => navigate('/cards')}>imperium card list</button>
    </div>
}

export default Homepage;
