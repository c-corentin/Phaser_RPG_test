class Map {
    constructor(scene){
        this.scene = scene;
        this.createMap();
    }

    createMap() {
        // create the tile map
        this.map = this.scene.make.tilemap({ key: 'map' });
        
        // add the tileset image to our map
        this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2);
        
        // create our background
        this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);
        
        // create blocked layer
        this.blockedLayer = this.map.createStaticLayer('blocked', this.tiles, 0, 0);
        this.blockedLayer.setCollisionByExclusion([-1]);
    
        // set scale to match the player's 
        this.backgroundLayer.setScale(2);
        this.blockedLayer.setScale(2);
    
        // set world bounds on map instead of view
        this.scene.physics.world.bounds.width = this.map.widthInPixles * 2;
        this.scene.physics.world.bounds.height = this.map.heightInPixles * 2;
    
        // set the camera inside the map
        this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixles * 2, this.map.heightInPixles * 2);
    }
}