import {Location, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

function PageTitle(): void {
    const location: Location = useLocation();
    const {t} = useTranslation("ui", {keyPrefix: "pageTitle"});
    useEffect((): void => {
        const titles: Record<string, string> = {
            "/": t("Homepage"),
            "/cards": t("Imperium Cardporium"),
        };
        document.title = titles[location.pathname] || "Page Not Found";
    }, []);
}

export default PageTitle;
