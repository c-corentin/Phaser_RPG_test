class Spawner {
    constructor(config, spawnLocations, addObject, deleteObject) {
        this.id = config.id;
        this.spawnInterval = config.spawnInterval;
        this.limit = config.limit;
        this.objectType = config.spawnerType;

        this.spawnLocations = spawnLocations;
        this.addObject = addObject;
        this.deleteObject = deleteObject;

        this.objectCreated = [];

        this.start();
    }

    start() {
        this.interval = setInterval(() => {
            if (this.objectCreated.length < this.limit) {
              this.spawnObject();  
            }
        }, this.spawnInterval);
    }

    spawnObject() {
        if (this.objectType === 'CHEST') {
            this.spawnChest();
        }
    }

    spawnChest() {
        const location = this.randomLocation();
        const chest = new ChestModel(location[0], location[1], 10, this.id);

        this.objectCreated.push(chest);
        this.addObject(chest.id, chest);
    }

    randomLocation() {
        const location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
        const invalidLocation = this.objectCreated.some((obj) => {
            if (obj.x === location[0] && obj.y === location[1]) {
                return true;
            }
            return false;
        });

        if (invalidLocation) return this.randomLocation;
        return location;
    }

    removeObject() {

    }
}