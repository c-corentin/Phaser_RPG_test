class Map {
    constructor(scene, key, tileSetName, bgLayerName, blockedLayerName){
        this.scene = scene;
        this.key = key;
        this.tileSetName = tileSetName;
        this.bgLayerName = bgLayerName;
        this.blockedLayerName = blockedLayerName;

        this.createMap();
    }

    createMap() {
        // create the tile map
        this.map = this.scene.make.tilemap({ key: this.key });

        // add the tileset image to our map
        this.tiles = this.map.addTilesetImage(this.tileSetName, this.tileSetName, 32, 32, 1, 2);

        // create our background
        this.backgroundLayer = this.map.createStaticLayer(this.bgLayerName, this.tiles, 0, 0);

        // create blocked layer
        this.blockedLayer = this.map.createStaticLayer(this.blockedLayerName, this.tiles, 0, 0);
        this.blockedLayer.setCollisionByExclusion([-1]);
    
        // set scale to match the player's 
        this.backgroundLayer.setScale(2);
        this.blockedLayer.setScale(2);
    
        // set world bounds on map instead of view
        this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
        this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;
    
        // set the camera inside the map
        this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels * 2, this.map.heightInPixels * 2);
    }
}