import {Location, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

export class PageTitle {
    static titles: Record<string, string>;
    static pageNotFoundTitle: string;

    static updateTitle(t: TFunction<string, string>, pathname: string): void {
        PageTitle.titles = {
            "/": t("Homepage"),
            "/cards": t("Imperium Cardporium"),
        };
        this.pageNotFoundTitle = t("404");
        document.title = PageTitle.titles[pathname] || PageTitle.pageNotFoundTitle;
    }
}

export function pageTitle(): void {
    const location: Location = useLocation();
    const {t: t} = useTranslation("ui", {keyPrefix: "pageTitle"});
    useEffect((): void => {
        PageTitle.updateTitle(t, location.pathname);
    }, []);
}
