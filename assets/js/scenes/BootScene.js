class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        // IMAGES
        this.loadImages();

        // SPRITES
        this.loadSprites();

        // AUDIO
        this.loadAudio();

        // TILEMAP
        this.loadTileMap();
    }

    loadImages() {
        this.load.image('button1', 'assets/images/ui/blue_button01.png'); //loads an image
        this.load.image('button2', 'assets/images/ui/blue_button02.png');
        
        //load the map tileset image
        this.load.image('background', 'assets/level/sheet2blocks.png')

    }

    loadSprites() {
         this.load.spritesheet('items', 'assets/images/items.png', {
            frameWidth: 32,
            frameHeight: 32
        }) //third argument specifies size of sprite

        this.load.spritesheet('characters', 'assets/images/characters.png', {
            frameWidth: 32,
            frameHeight: 32
        })
    }

    loadAudio() {
        this.load.audio('gold_pickup', ['assets/audio/Pickup.wav']); //selects an array of audio to be played (if browser does not support)
    }

    loadTileMap() {
        // load JSON file map
        this.load.tilemapTiledJSON('map', 'assets/level/mapmaison.json');
    }

    create(){
        this.scene.start('Game');
    }
}