import {Location, useLocation} from "react-router-dom";
import {useEffect} from "react";

function PageTitle(): void {
    const location: Location = useLocation();
    useEffect((): void => {
        const titles: Record<string, string> = {
            "/": "Homepage",
            "/cards": "Imperium Cardporium",
        };
        document.title = titles[location.pathname] || "Page Not Found";
    }, []);
}

export default PageTitle;
