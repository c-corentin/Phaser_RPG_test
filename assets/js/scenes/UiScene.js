class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui');
    };

    init() {
        //link to the game scene
        this.gameScene = this.scene.get('Game');
    };

    create(){
        this.setupUiElements();
        this.setupEvents();
    };

    setupUiElements (){
        //create score text
        this.scoreText = this.add.text(35, 8, 'Coins: 0', {fontSize: '16px', fill:'#fff'});

        //create a coin icon
        this.coinIcon = this.add.image(15, 15, 'items', 3);
    };

    setupEvents(){
        //listen the updateScore event
        this.gameScene.events.on('updateScore', (score) => {
            this.scoreText.setText(`Coins: ${score}`);
        });
    };
};