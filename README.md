# oriko-mikuni.github.io
<div align="center">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/powerR.png" height="50" alt="power">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/fameR.png" height="50" alt="fame">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/uncivilisedR.png" height="50" alt="uncivilised">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/civilisedR.png" height="50" alt="civilised">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/regionR.png" height="50" alt="region">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/tributaryR.png" height="50" alt="tributary">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/unrestR.png" height="50" alt="unrest">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/trade_routeR.png" height="50" alt="trade_route">
<img src="https://github.com/oriko-mikuni/oriko-mikuni.github.io/raw/main/public/suit_icon/gadgetR.png" height="50" alt="gadget">
</div>

This is a webpage of the great card game Imperium
**[Classics](https://www.ospreypublishing.com/uk/imperium-classics-9781472844743/)**,
**[Legends](https://www.ospreypublishing.com/uk/imperium-legends-9781472844750/)** and
**[Horizons](https://www.ospreypublishing.com/uk/imperium-horizons-9781472858368/)**,
a deck-building civilization game series.

The card game is great and this webpage recommends purchasing it
for personal use. You can click the links above.

Not affiliated with nor endorsed by Osprey.
## Features

### Cardporium
A list of some cards from the game.

Contains cards from Classics, Legends and Horizons.

You can click on a card to open a dialog, which may contain tooltips or related cards.

#### TODO for Cardporium
* contents
  * [x] added cards from all nations from these three boxes.
  * [x] added common cards, state cards, etc. from these three boxes.
* features
  * [x] filter options
  * [x] minimal card display
  * [x] detailed card dialog
* added i18n support
  * [x] English
  * [x] Chinese(China) (with fanmade translation for Horizons)
  * for more languages, you can help translation by going to the [locales](https://github.com/oriko-mikuni/oriko-mikuni.github.io/tree/main/src/locales) folder and following these steps:
    * Copy all `.json` file in `en` folder and paste them in a new folder, named by your language (e.g. `de`).
    * Translate all the value strings in the new files.
      * Do not change the key (strings on the left of `:`).
      * Do not translate anything wrapped in `{icon}`, they are [icons](https://github.com/oriko-mikuni/oriko-mikuni.github.io/wiki/Card-Maker---%E5%8D%A1%E7%89%8C%E5%88%B6%E4%BD%9C) and should remain the same (for the same icon).
      * Wrap the **bold** content in `*bold*`.
      * Wrap the *italic* content in `[italic]`.
      * For Contents wrapped in `<displayText|behaviorCode>`, translate the display texts, not the behavior code (to keep the same behavior).
      * Content format can be combined, such as `[*boldItalic*]` for ***boldItalic***.
    * Then you can send a pull request.

### Card Maker
A simple card maker.

#### TODO for Card Maker
* [x] added export image feature

### Common Sets
A page showing different common sets.

### More advices are welcome!
You can start an [issue](https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues).
