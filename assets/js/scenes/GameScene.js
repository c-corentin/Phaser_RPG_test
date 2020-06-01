class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    create() {
        let goldPickupSound = this.sound.add('gold_pickup'); //can add a second argument with different object properties 

        this.chest = new Chest(this, 300, 300, 'items', 0); //fourth argument select the frame (starts at 0)

        this.wall = this.physics.add.image(500, 100, 'button1'); //creates new object with applied physic
        this.wall.setImmovable(); //won't make the object move even with applied physics 

        this.player = new Player(this, 32, 32, 'characters', 0);

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