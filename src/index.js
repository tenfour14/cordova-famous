var FamousEngine = require('famous/core/FamousEngine');
var DOMElement   = require('famous/dom-renderables/DOMElement');

var Header       = require('Header');
var Footer       = require('Footer');
var HomeCenter   = require('HomeCenter');

FamousEngine.init();

var scene = FamousEngine.createScene();

// Header
var headerNode = new Header();
scene.addChild(headerNode);


// Center
var homeCenterNode = new HomeCenter();
scene.addChild(homeCenterNode);

// Footer
var footerNode = new Footer();
scene.addChild(footerNode);