class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    init() {
        this.scene.launch('Ui');
    };

    create() {
        this.createAudio();

        this.createChests();

        this.createWalls();

        this.createPlayer();

        this.addCollisions();

        this.createInput();
    };

    createAudio() {
        this.goldPickupSound = this.sound.add('gold_pickup'); //can add a second argument with different object properties 
    };

    createPlayer() {
        this.player = new Player(this, 64, 64, 'characters', 1);
    };

    createChests() {
        this.chest = new Chest(this, 300, 300, 'items', 0); //fourth argument select the frame (starts at 0)
    };

    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1'); //creates new object with applied physic
        this.wall.setImmovable(); //won't make the object move even with applied physics 
    };

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys(); //Phaser in-built keyboard event listener
    };

    addCollisions() {
        this.physics.add.collider(this.player, this.wall); //Adds collision between said objects
        this.physics.add.overlap(this.player, this.chest, this.collectChest, null, this); //adds overlap check, plays a sound and destroys it
    };

    update() {
        this.player.update(this.cursors); //calls the update method for the player class
    };

    collectChest(player, chest) {
        this.goldPickupSound.play();
        this.events.emit('updateScore', chest.coins) //link Ui and Game scene and update the coins score
        chest.destroy();
    };
};