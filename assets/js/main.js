let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        // init: init, initialize the scene once
        preload: preload, //loads any assets or logic before rendering
        create: create, //create game objects when the scene starts up, called once
        update: update, // called once every frame
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true, //set objects outline and pointers where objects are headed to
            gravity: {
                y: 0, //direction of the gravity plus value of strength
            },
        },
    },
};

let game = new Phaser.Game(config);

function preload() { //preload any existing assets with two arguments : name et file path
    this.load.image('button1', 'assets/images/ui/blue_button01.png'); //loads an image

    this.load.spritesheet('items', 'assets/images/items.png', {
        frameWidth: 32,
        frameHeight: 32
    }); //third argument specifies size of sprite

    this.load.spritesheet('characters', 'assets/images/characters.png', {
        frameWidth: 32,
        frameHeight: 32
    });
};

function create() { //adds the preloaded asset to the scene
    let button = this.add.image(100, 100, 'button1'); // arguments : coordinates (0,0 is top left)

    button.setOrigin(0.5, 0.5);

    this.add.sprite(300, 100, 'button1'); //sprite can be animated, image not

    this.add.image(300, 300, 'items', 4); //fourth argument select the frame (starts at 0)

    this.physics.add.image(500, 100, 'button1'); //creates new object with applied physic

    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2); //sets y and x values if not specified sets both

    this.cursors = this.input.keyboard.createCursorKeys(); //Phaser in-built keyboard event listener
};

function update() { //updates keyboard event listener
    this.player.setVelocity(0); //sets initial velocity

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160); //Set object velocity to move it along x and y axes
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);;
    };

    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
    };
};