let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        // init: init, initialize the scene once
        preload: preload, //loads any assets or logic before rendering
        create: create, //create game objects when the scene starts up, called once
        // update: update, called once every frame
    },
};

let game = new Phaser.Game(config);

function preload() { //preload any existing assets with two arguments : name et file path
this.load.image('button1', 'assets/images/ui/blue_button01.png'); //loads an image

this.load.spritesheet('items', 'assets/images/items.png', {frameWidth: 32, frameHeight: 32}); //third argument specifies size of sprite
};

function create() { //adds the preloaded asset to the scene
    let button = this.add.image(100, 100, 'button1'); // arguments : coordinates (0,0 is top left)

    button.setOrigin(0.5,0.5);

    this.add.sprite(300, 100, 'button1'); //sprite can be animated, image not

    this.add.image(300, 300, 'items', 4); //fourth argument select the frame (starts at 0)
};