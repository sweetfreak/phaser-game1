SOURCE: https://shakuro.com/blog/phaser-js-a-step-by-step-tutorial-on-making-a-phaser-3-game#part-1


Here's a little how to for Phaser for myself

* Folder Structure
├── src
    ├── assets (game assets - sprites pngs, sprite sheets, JSON files)
    ├── classes (for classes like player, score meter, etc)
    └── scenes (place to store game scenes)

Then make an index.html in the src folder



What we indicate in the config: 

what loaders to use for files
what plugins to apply during the build
that the minification is done using Terser
dev-server settings. 