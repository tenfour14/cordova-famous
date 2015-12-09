var FamousEngine = require('famous/core/FamousEngine');
var DOMElement   = require('famous/dom-renderables/DOMElement');

var Header       = require('Header');


FamousEngine.init();

var scene = FamousEngine.createScene();

// Header
var headerNode = new Header();
scene.addChild(headerNode);
