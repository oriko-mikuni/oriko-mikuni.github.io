import React from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ImperiumCardporium from "./ImperiumCardporium.tsx";
import Test from "../../playground/Test.tsx";

function App(): React.ReactElement {
    return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cards" element={<ImperiumCardporium/>}/>
        <Route path="/testTriangle" element={<Test start={100} end={200} step={5}></Test>}/>
    </Routes>;
}

export default App;
