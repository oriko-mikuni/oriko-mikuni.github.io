# Card Set Template

you can add new card sets by these steps:
* duplicate the folder `defaultCards` and prepare for modification on it. DO NOT MODIFY ANY FILE IN THIS TEMPLATE FOLDER.
* add card names enum of your cards in `CardName.ts`
* fill in your card names in format `[CardName.xxx]: {Factory: yyy},` where `xxx` is the card name you defined in `CardName.ts` and `yyy` is the name of the `.ts` file you would like to put your cards in. Make sure each `yyy` is different.
* find `generate_card_ts_by_cardManifest.ts` and change the `pathName` parameter to the folder your card set is in, and run `code:generateCardByManifest`.
* code each of your cards in the just generated `.ts` file.
* add translation in `locales/en` (and language you use is not english, also `locales/${your language}`folder).
