import * as Phaser from 'phaser';
import * as eruda from 'eruda';

eruda.init();

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 800
const DEVICE_RATIO = 1

const config = {
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH * DEVICE_RATIO,
    height: DEFAULT_HEIGHT * DEVICE_RATIO,
    //resolution: 2
  },
  scene: {
    preload: preload,
    create: create
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

function preload() {
	this.load.image('pic', 'assets/pic.png');
}

function create() {
	var img = this.add.image(0,0,'pic').setOrigin(0,0)
	//img.x = ((480-img.width) / 480) * this.game.canvas.width;
	img.y = 250;
	//img.scale = 10
	console.log(this.game.canvas.width, img.x);
}

window.addEventListener('load', () => {
  let game = new Phaser.Game(config)
  
  
})