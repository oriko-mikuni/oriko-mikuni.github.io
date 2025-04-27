import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

import enCardName from './locales/en/cardName.json';
import enModuleName from './locales/en/moduleName.json';
import enCardEffect from './locales/en/cardEffect.json';
import enVictoryText from './locales/en/cardVictoryText.json';
import enUI from './locales/en/ui.json';
import enTooltip from './locales/en/tooltip.json';

import zhCNCardName from './locales/zh-CN/cardName.json';
import zhCNModuleName from './locales/zh-CN/moduleName.json';
import zhCNCardEffect from './locales/zh-CN/cardEffect.json';
import zhCNVictoryText from './locales/zh-CN/cardVictoryText.json';
import zhCNUi from './locales/zh-CN/ui.json';
import zhCNTooltip from './locales/zh-CN/tooltip.json';

export const languageName: Record<string, string> = {
    "en": "English",
    "zh_CN": "简体中文"
}

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                cardName: enCardName,
                moduleName: enModuleName,
                cardEffect: enCardEffect,
                victoryText: enVictoryText,
                ui: enUI,
                tooltip: enTooltip
            },
            zh_CN: {
                cardName: zhCNCardName,
                moduleName: zhCNModuleName,
                cardEffect: zhCNCardEffect,
                victoryText: zhCNVictoryText,
                ui: zhCNUi,
                tooltip: zhCNTooltip
            }
        },
        ns: ['cardName', 'moduleName', 'cardEffect', 'ui', 'victoryText', 'tooltip'],
    })

export default i18n;
