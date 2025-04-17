import React, {ChangeEvent} from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ImperiumCardporium from "./ImperiumCardporium.tsx";
import {useTranslation} from "react-i18next";
import {i18n} from "i18next";
import {languageName} from "../../i18n.ts";

function changeLanguage(i18n: i18n, language: string) {
    i18n.changeLanguage(language);
    window.location.reload();
}

function App(): React.ReactElement {
    const {i18n} = useTranslation();

    const languageList: Array<React.JSX.Element> =
        Object.entries(languageName).map(
            ([lang, langDisplay]: [string, string]): React.JSX.Element =>
                <option value={lang} key={lang}>
                    {langDisplay}
                </option>
        );

    return <>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/cards" element={<ImperiumCardporium/>}/>
        </Routes>
        <div style={{position: "fixed", textAlign: "right", top: "20px", right: "20px"}}>
            <select onChange={(a: ChangeEvent<HTMLSelectElement>) => changeLanguage(i18n, a.target.value)} defaultValue={i18n.language}>
                {languageList}
            </select>
        </div>
    </>;
}

export default App;
