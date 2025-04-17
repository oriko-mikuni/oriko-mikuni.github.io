import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

import enCardName from './locales/en/cardName.json';
import enModuleName from './locales/en/moduleName.json';
import enCardEffect from './locales/en/cardEffect.json';
import enVictoryText from './locales/en/cardVictoryText.json';
import enUI from './locales/en/ui.json';

import zhCardName from './locales/zh/cardName.json';
import zhModuleName from './locales/zh/moduleName.json';
import zhCardEffect from './locales/zh/cardEffect.json';
import zhVictoryText from './locales/zh/cardVictoryText.json';
import zhUI from './locales/zh/ui.json';

export const languageName: Record<string, string> = {
    "en": "English",
    "zh": "中文"
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
            },
            zh: {
                cardName: zhCardName,
                moduleName: zhModuleName,
                cardEffect: zhCardEffect,
                victoryText: zhVictoryText,
                ui: zhUI,
            }
        },
        ns: ['cardName', 'moduleName', 'cardEffect', 'ui', 'victoryText'],
    })

export default i18n;
