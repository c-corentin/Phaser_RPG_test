class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    };

    preload() {
        // IMAGES
        this.loadImages();

        // SPRITES
        this.loadSprites();

        // AUDIO
        this.loadAudio();
    };

    loadImages() {
        this.load.image('button1', 'assets/images/ui/blue_button01.png'); //loads an image
        this.load.image('button2', 'assets/images/ui/blue_button02.png');
    };

    loadSprites() {
         this.load.spritesheet('items', 'assets/images/items.png', {
            frameWidth: 32,
            frameHeight: 32
        }); //third argument specifies size of sprite

        this.load.spritesheet('characters', 'assets/images/female_archer.png', {
            frameWidth: 64,
            frameHeight: 64
        });
    };

    loadAudio() {
        this.load.audio('gold_pickup', ['assets/audio/Pickup.wav']); //selects an array of audio to be played (if browser does not support)
    };

    create(){
        this.scene.start('Game');
    };
};