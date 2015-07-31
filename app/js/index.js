
var dom = require('component-dom');
var domready = require('domready');
var Howl = require('howler').Howl;

var sound = new Howl({
  urls: ['assets/sprite.mp3', 'assets/sprite.ogg'],
  sprite: {
    ehh: [0, 316],
    ehm: [548, 467],
    hallo: [1100, 271],
    ja: [1500, 323],
    minecraft: [2000, 376],
    so1: [2500, 715],
    so2: [3300, 544],
    bee: [4000, 473]
  }
});

var mapKey2Sound = {
  65: 'ehh',
  87: 'ehm',
  83: 'hallo',
  69: 'ja',
  68: 'minecraft',
  82: 'so1',
  70: 'so2',
  84: 'bee',
  71: 'ehh',
  90: 'ehm',
  72: 'hallo',
  85: 'ja',
  74: 'minecraft',
  73: 'so1',
  75: 'so2',
  79: 'bee',
  76: 'ehh'
};

domready(function() {
  dom('.key').on('click', onKeyClick);
  window.addEventListener('keyup', function(e) {
    var key = String(e.keyCode);
    dom('.key[data-key="' + key + '"]').removeClass('press');
  }, false);

  window.addEventListener('keydown', function(e) {
    var key = String(e.keyCode);
    dom('.key[data-key="' + key + '"]').addClass('press');
    playSound(key);
  }, false);

  function onKeyClick(e) {
    var key = dom(e.target).attr('data-key');
    playSound(key);
  }

  function playSound(keyCode) {
    sound.play(mapKey2Sound[keyCode]);
  }
});
