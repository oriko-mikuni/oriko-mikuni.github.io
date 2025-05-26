import React from "react";
import {useTranslation} from "react-i18next";

function DialogBoxCenter({onClose, DialogContent, isTextBlack}: {
    onClose: () => void,
    DialogContent: ({isTextBlack}: {isTextBlack: boolean}) => React.JSX.Element,
    isTextBlack: boolean
}): React.JSX.Element {
    const {t: t1} = useTranslation("ui", {keyPrefix: "DialogBox"});

    return <div>
        <div key="overlay" className={"fixed size-full bg-[#00000080] z-[100] left-0 top-0"} onClick={onClose}></div>
        <div key="dialog" className={"fixed w-[650px] bg-white text-black text-[12px] z-[101] p-[10px] rounded-[10px] left-1/2 top-1/2 -translate-1/2"}>
            <button onClick={onClose} key="close">{t1("Close")}</button>
            <DialogContent isTextBlack={isTextBlack}/>
        </div>
    </div>;
}

export default DialogBoxCenter;
