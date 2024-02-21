import "phaser-tilemap-plus"
import Phaser from './phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {

    this.load.tilemapTiledJSON('farm1', './maps/farm1.tmj');


    // this.load.image('tiles', './path/to/your/tileset.png')
    const images = {
        farmfort: './assets/environments/rustic/farmfort.png',
        player: './assets/characters/player.png'
    }

    for (let [key, value] of Object.entries(images)){
        this.load.image(key,value)
    }

    this.load.atlas('./player', './assets/characters/player.json', './assets/sources/mystic_woods/characters/player.png');
}

function create() {
    // Create the tilemap
    const map = this.make.tilemap({ key: 'farm1' });

    // Add the tileset to the map
    const tileset = map.addTilesetImage('farmfort', null, 16, 16);

    // Create a layer
    // const layer = map.createLayer('your_layer_name', tileset, 0, 0);
    const layer = {
        'ground': map.createLayer('ground', tileset, 0, 0),
        'walls': map.createLayer('walls', tileset, 0, 0),
        'short': map.createLayer('short', tileset, 0, 0),
        'tall1': map.createLayer('tall1', tileset, 0, 0),
        'tall2': map.createLayer('tall2', tileset, 0, 0),
    }



    // Define animations for the player sprite
    this.anims.create({
        key: './player_idle',
        frames: this.anims.generateFrameNames('./player', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    // Create the player sprite
    const player = this.physics.add.sprite(100, 100, './player');
    
    // Play the './player_idle' animation
    player.play('./player_idle');
}





