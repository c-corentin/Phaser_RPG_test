class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    };

    preload() {
        this.load.image('button1', 'assets/images/ui/blue_button01.png'); //loads an image

        this.load.spritesheet('items', 'assets/images/items.png', {
            frameWidth: 32,
            frameHeight: 32
        }); //third argument specifies size of sprite

        this.load.spritesheet('characters', 'assets/images/characters.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.audio('gold_pickup', ['assets/audio/Pickup.wav']); //selects an array of audio to be played (if browser does not support)
    };

    create(){
        this.scene.start('Game');
    };
};