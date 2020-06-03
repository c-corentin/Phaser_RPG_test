class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);

        this.scene = scene; //add game object to the scene
        this.coins = Math.floor(Math.random() * 6) + 8; //amount of coin chest loots, between 8 and 14

        //Enable phisycs
        this.scene.physics.world.enable(this); 
        //add object into the scene
        this.scene.add.existing(this); 

    };
};