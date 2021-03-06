class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    this.scene = scene; // the scene this container will be added to
    this.velocity = 160; // the velocity when moving our player

    // enable physics
    this.scene.physics.world.enable(this);
    // set immovable if another object collides with our player
    this.setImmovable(false);
    // scale our player
    this.setScale(1.8);
    // collide with world bounds
    this.setCollideWorldBounds(true);
    // add the player to our existing scene
    this.scene.add.existing(this);
    // focus the camera on the player
    this.scene.cameras.main.startFollow(this)
  }

  update(cursors) {
    this.body.setVelocity(0);

    if (cursors.shift.isDown && cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity * 2);
    } else if (cursors.shift.isDown && cursors.right.isDown) {
      this.body.setVelocityX(this.velocity * 2);
    } else if (cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    }

    if (cursors.shift.isDown && cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity * 2);
    } else if (cursors.shift.isDown && cursors.down.isDown) {
      this.body.setVelocityY(this.velocity * 2);
    } else if (cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    }
  }
}