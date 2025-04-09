import React from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ImperiumCardporium from "./ImperiumCardporium.tsx";

function App(): React.ReactElement {
    return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cards" element={<ImperiumCardporium/>}/>
    </Routes>;
}

export default App;
