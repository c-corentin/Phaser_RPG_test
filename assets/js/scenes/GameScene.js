class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    create() {
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
        this.physics.add.overlap(this.player, this.chest, function (player, chest) {
            goldPickupSound.play();
            chest.destroy();
        }); //adds overlap check, plays a sound and destroys it

        this.cursors = this.input.keyboard.createCursorKeys(); //Phaser in-built keyboard event listener

    };

    update(){
        this.player.update(this.cursors); //calls the update method for the player class
    };
};