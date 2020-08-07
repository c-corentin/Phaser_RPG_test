class GameManager {
    constructor(scene, mapData) {
        this.scene = scene;
        this.mapData = mapData;

        this.spawners = {};
        this.chests = {};
        this.monsters = {};

        this.playerLocations = [];
        this.chestLocations = {};
        this.monsterLocations = {};
    }

    setup() {
        this.parseMapData();
        this.setupEventListener();
        this.setupSpawners();
        this.spawnPlayer();
    }

    parseMapData() {
        this.mapData.forEach((layer) => {
            if (layer.name === 'player_locations') {
                layer.objects.forEach((obj) => {
                    this.playerLocations.push([obj.x + (obj.width / 2), obj.y - (obj.height / 2)]);
                });
            } else if (layer.name === 'chest_locations') {
                layer.objects.forEach((obj) => {
                    if (this.chestLocations[obj.properties.spawner]) {
                        this.chestLocations[obj.properties.spawner].push([obj.x + (obj.width / 2), obj.y - (obj.height / 2)]);
                    } else {
                        this.chestLocations[obj.properties.spawner] = [
                            [obj.x + (obj.width / 2), obj.y - (obj.height / 2)]
                        ];
                    }
                });
            } else if (layer.name === 'monster_locations') {
                layer.objects.forEach((obj) => {
                    if (this.monsterLocations[obj.properties.spawner]) {
                        this.monsterLocations[obj.properties.spawner].push([obj.x + (obj.width / 2), obj.y - (obj.height / 2)]);
                    } else {
                        this.monsterLocations[obj.properties.spawner] = [
                            [obj.x + (obj.width / 2), obj.y - (obj.height / 2)]
                        ];
                    }
                });
            }
        });
    }

    setupEventListener() {
        this.scene.events.on('pickUpChest', (chestId) => {
            // update the spawner
            if (this.chests[chestId]) {
                // removing the chest
                this.spawners[this.chests[chestId].spawnerId].removeObject(chestId);
            }
        });

        this.scene.events.on('destroyedEnemy', (monsterId) => {
            // update the spawner
            if (this.monsters[monsterId]) {
                // removing the chest
                this.spawners[this.monsters[monsterId].spawnerId].removeObject(monsterId);
            }
        });
    }

    setupSpawners() {
        const config = {
            spawnInterval: 3000,
            limit: 3,
            spawnerType: SpawnerType.CHEST,
            id: '',
        };

        let spawner;

        // Create chest spawners
        Object.keys(this.chestLocations).forEach((key) => {

            config.id = `chest-${key}`;


            spawner = new Spawner(config,
                this.chestLocations[key],
                this.addChest.bind(this),
                this.deleteChest.bind(this)
            );

            this.spawners[spawner.id] = spawner;
        });

        // Create monster spawners
        Object.keys(this.monsterLocations).forEach((key) => {

            config.id = `monster-${key}`;
            config.spawnerType = SpawnerType.MONSTER;

            spawner = new Spawner(config,
                this.monsterLocations[key],
                this.addMonster.bind(this),
                this.deleteMonster.bind(this)
            );

            this.spawners[spawner.id] = spawner;
        });
    }

    spawnPlayer() {
        // Create random player spawn points
        const location = this.playerLocations[Math.floor(Math.random() * this.playerLocations.length)];
        this.scene.events.emit('spawnPlayer', location);
    }

    addChest(chestId, chest) {
        this.chests[chestId] = chest;
        this.scene.events.emit('chestSpawned', chest);
    }

    deleteChest(chestId) {
        delete this.chests[chestId];
    }

    addMonster(monsterId, monster) {
        this.monsters[monsterId] = monster;
        this.scene.events.emit('monsterSpawned', monster);
    }

    deleteMonster(monsterId) {
        delete this.monsters[monsterId];
    }
}