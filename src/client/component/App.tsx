import React, {ChangeEvent} from "react";
import {Route, Routes, Location, useLocation} from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ImperiumCardporium from "./ImperiumCardporium.tsx";
import {useTranslation} from "react-i18next";
import {i18n, TFunction} from "i18next";
import {languageName} from "../../i18n.ts";
import {PageTitle} from "./PageTitle.tsx";
import ImperiumCardMaker from "./ImperiumCardMaker.tsx";
import ImperiumCommonSets from "./ImperiumCommonSets.tsx";

function changeLanguage(i18n: i18n, t: TFunction<string, string>, location: Location, language: string) {
    i18n.changeLanguage(language);
    PageTitle.updateTitle(t, location.pathname);
}

function App(): React.ReactElement {
    const {i18n} = useTranslation();
    const {t: pageTitleTranslation} = useTranslation("ui", {keyPrefix: "pageTitle"});
    const location: Location = useLocation();

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
            <Route path="/cardMaker" element={<ImperiumCardMaker/>}/>
            <Route path="/commonSets" element={<ImperiumCommonSets/>}/>
        </Routes>
        <div className="fixed text-right top-[20px] right-[20px] z-[200]">
            <select onChange={(a: ChangeEvent<HTMLSelectElement>) => changeLanguage(i18n, pageTitleTranslation, location, a.target.value)}
                    defaultValue={i18n.language}>
                {languageList}
            </select>
        </div>
    </>;
}

export default App;
