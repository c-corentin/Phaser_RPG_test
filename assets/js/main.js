let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ //Phase will load the first scene but not the others
        BootScene,
        GameScene,
        TitleScene,
        UiScene,
    ],
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

/* Moved out test lines to other files


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

    this.load.audio('gold_pickup', ['assets/audio/Pickup.wav']); //selects an array of audio to be played (if browser does not support)
};

function create() { //adds the preloaded asset to the scene
    let goldPickupSound = this.sound.add('gold_pickup'); //can add a second argument with different object properties 

    let button = this.add.image(100, 100, 'button1'); // arguments : coordinates (0,0 is top left)

    button.setOrigin(0.5, 0.5);

    this.add.sprite(300, 100, 'button1'); //sprite can be animated, image not

    this.chest = this.physics.add.image(300, 300, 'items', 0); //fourth argument select the frame (starts at 0)

    this.wall = this.physics.add.image(500, 100, 'button1'); //creates new object with applied physic
    this.wall.setImmovable(); //won't make the object move even with applied physics 

    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2); //sets y and x values if not specified sets both
    this.player.body.setCollideWorldBounds(true); //makes the pklayer unable to exit the scene

    this.physics.add.collider(this.player, this.wall); //Adds collision between said objects
    this.physics.add.overlap(this.player, this.chest, function(player, chest){goldPickupSound.play(); chest.destroy();}); //adds overlap check, plays a sound and destroys it

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
*/