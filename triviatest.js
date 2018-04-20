(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"triviatest_atlas_", frames: [[1074,1080,802,74],[871,0,160,500],[270,1080,802,74],[1074,1156,307,62],[270,919,310,69],[270,990,310,69],[871,540,268,268],[1303,270,268,268],[1350,810,268,268],[0,919,268,268],[1411,540,268,268],[1141,540,268,268],[0,649,268,268],[1573,270,268,268],[1681,540,268,268],[270,649,268,268],[1080,810,268,268],[1620,810,268,268],[540,649,268,268],[810,810,268,268],[1573,0,268,268],[1303,0,268,268],[1033,0,268,268],[1033,270,268,268],[0,0,869,647],[270,1156,802,74]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.black = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.daewae = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.green = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Group4 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Group_1 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Group_2 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pic4 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pic5 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pic6 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pic7 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pic8 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pic9 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.pic10 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pic11 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pic12 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pic13 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.pic14 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pic15 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.pic16 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.pic17 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.pic18 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle_1 = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["triviatest_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yesiwant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,x:-10,y:-2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,69);


(lib.biolog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B3E1C").s().p("ABfDZQgHAAgGgFQgGgFgBgHQgJAAgIgHQgHgFgDgJQgFgMAAgYQgQAPgNAQQgOAQgHABIgRgBQgFABgIAFQgIAGgEACQgJACgJgFQgJgGgBgJQgBgOASgSIg0AUQgSAGgIgBQgHgBgGgEQgFgFAAgHIggAEQgVACgHgJQgFgFABgJQABgIAGgGQAIgHAUgGIBtggIAAAAQACgKAIgEIAJgCIAJgDQAGgEAFgLQAZg5gDhAQgFgwgBgYQAAgggDgKIgEgLQAbAIAdACQAhABAWgIQAWgJAMgQIgCAQQgCAkgCBKIgCBEQgCAqADAaQADAUgCAKIAAABIADAGQAEAFAMAHQAeAOAhALQARAHAGAGQAIAKgEAPQgDAQgMAEQgFABgGgBIgMgEQg+gbgXgOIAPAuQAFAQgCAGQgBAHgGAFQgGAEgGAAIgBAAg");
	this.shape.setTransform(50.8,73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#196C17").s().p("AhcCyQgJgEgCgJIgBgGQAAgKAKgGQAGgEAHACQAHABAFAFQAEAFAAAHQABAHgEAFQgEAGgGACIgHABIgHgCgAGJCiQgHgBgFgEQgGgHAAgIQAAgGACgDQAEgGAGgDQAIgEAHAAQALACAEAJQAFAHgEAJQgEAJgIAEQgFADgGAAIgCgBgABaCUQgEgDgCgFIgBgIQgBgLAKgFQAEgDAHAAQAHgBAGADQAMAFgBAOQgBANgNAFIgJABQgHAAgHgFgAklCSQgFgEgCgFIgBgHQAAgIAFgGQAFgGAHgBQAGgCAFACQAMADABAMQABAGgEAIQgGAMgNAAQgGAAgFgEgAEaBuQgHgCgFgGQgFgFAAgHQAAgKAIgGQAGgEAGAAQAHAAAFADQAHAEABAGQAEAIgEAHQgCAGgIAEQgEACgFAAIgEAAgAgwBlQgFgEgCgFIgCgHQABgIAFgGQAFgGAHgBQAFgCAGACQAMADABAMQACAGgFAIQgGAMgNAAQgGAAgFgEgAC3BOQgEgDgCgFIgBgIQgCgLALgFQAEgDAGAAQAIgBAGADQAMAFgBAOQgCANgNAFIgIABQgHAAgHgFgAjZAQQgJgEgCgJIgBgFQAAgLAKgGQAFgDAIABQAHABAFAFQAEAFAAAHQABAGgEAGQgEAFgGACIgHABIgHgBgAgvAMQgHgBgFgGQgFgFAAgHQAAgJAHgGQAGgFAHAAQAQAAAFANQADAIgEAGQgDAHgGADQgFADgFAAIgEgBgAFkAEQgHgDgCgDQgDgEgBgGIAAgJQACgJAJgEQAHgEAKADQAGADAFAIIADAGQAEAJgFAIQgFAHgKABIgBAAQgGAAgGgDgAmbgBQgIgHABgJQgBgEACgEIAAgBQACgFAEgEQAIgIALACQAFABAEAEQAFAFAAAFQAEAMgJAJQgFAFgGACIgFABQgGAAgGgEgABQgTQgEgCgCgFIgBgJQgBgLAKgFQAEgDAHAAQAHgBAGADQAMAGgBAOQgBAMgNAFIgJACQgHAAgHgGgADmgWQgHgBgFgFQgGgFgBgHIAAgGQAAgJAHgEQAGgGAHABQAIABAHAHQAJAJgEAMQgCAGgHAEQgEADgFAAIgDAAgAk6g1IgDgJQgBgHADgGQAEgHAFgCQAJgEAKADQAHADAEADQAGAGAAAIQAAAJgEAFQgIAHgLAAQgOAAgHgJgAhfhFQgHgDgCgGIgDgIQAAgKAFgGQAFgGAIgBQAHAAAHAEQAFAEACAHQACAIgCAGQgFAMgLABIgDABQgEAAgEgDgAjIhuQgJgDgEgFQgGgGAAgGQgBgHAEgFQAEgGAGgCQAHgCANADQANAGAEAIQAEAJgEAJQgFAJgKABIgDAAQgFAAgIgDgABlh7QgHgGABgIQAAgJAHgGQAHgFARAAQALABADACQAKAGgBAMQAAALgJAGQgEACgLABIgDAAQgOAAgHgHgAgNiQQgFgCgCgFIgBgJQgBgLAKgFQAFgDAGAAQAGgBAHADQALAGgBAOQgCAMgNAFIgHACQgHAAgGgGg");
	this.shape_1.setTransform(48.5,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#126210").s().p("AlIEPQgWgFgVgSQgPgLgVgYQgkgnAGgbQgYgIgTggQgQgYADgSQACgSAbgVQAegWAHgNQgBAEAAAFQgBAIAIAHQAIAGAJgDQAHgCAEgFQAJgKgDgKQgBgGgFgEQgEgFgFgBQgLgBgIAHQgEAEgCAGQgLgXAIgcQAIgaAVgSQASgQAcgLQASgHAhgHQgFgWAggUQAjgWAkgIQApgIAjAMQAAgZArgTQAjgOAVgCQAhgEAVATIAIAIQAFAEAEABQAFACANgBQAjgEAiAPQAiAQATAeIA0gEQAdAAAXAFQAZAGAOAMQATASgFAWQAvgBApAUQAfAPAIAVQAHAWgOAbQASAHALARQALARgCATQgCATgNAPQgOAPgTAEQAXASAKASQAOAZgGAWQgHAdgqATQgtAVgyABQgyABgugTQgQgGgGgBQgIgBgKACIhHAIIgGAMQgMAQgWAJQgXAIgggBQgegCgbgIIgIgDQgVgHgHAAQgHAAgUAGQgdAIgcgEQgegFgUgSQgZAhhHAEIgSABQgSAAgLgEgAhoCfQgKAGAAALIABAGQACAJAKAEQAGACAHgCQAHgCADgFQAEgGAAgHQgBgHgEgFQgFgFgHgBIgEAAQgFAAgEACgAF6CMQgHADgDAGQgCAEAAAGQgBAIAGAGQAFAFAHABQAHAAAGgDQAIgDAEgJQAEgJgFgIQgEgIgKgCIgCAAQgHAAgGADgABdCBQgGAAgFADQgKAFABALIABAJQADAFAEACQAKAJAMgFQANgFABgMQABgOgLgGQgFgCgGAAIgDAAgAkmB9QgHACgFAGQgFAGAAAHIABAHQACAGAFAEQAFADAGAAQANAAAHgMQAEgHgCgGQgBgNgMgDIgFAAIgGAAgAEHBbQgIAGAAAJQAAAHAFAGQAFAGAHABQAHACAHgEQAHgDACgHQAEgHgDgIQgCgGgGgDQgGgEgGAAQgHAAgGAFgAgxBQQgHACgFAGQgFAGAAAHIABAHQACAGAFAEQAFADAGAAQANAAAHgMQAEgHgCgGQgBgNgMgDIgFAAIgGAAgAC6A7QgHAAgEADQgKAFABALIABAJQACAFAEACQAKAJAMgFQANgFACgMQABgOgMgGQgFgCgFAAIgDAAgAjlgCQgKAFAAAKIABAGQACAJAKAEQAGADAHgCQAHgCADgGQAEgFAAgHQgBgHgEgFQgFgEgHgBIgEAAQgFAAgEACgAhCgGQgIAGAAAJQAAAHAFAFQAFAGAHACQAHABAHgDQAHgEACgGQAEgHgDgIQgFgMgPAAQgHAAgGAEgAFYgSQgIAEgDAJIAAAIQABAHADAEQADADAGAEQAIADAGAAQAKgCAEgIQAFgIgDgIIgEgGQgFgHgGgDIgJgBQgEAAgEABgABTglQgGAAgFADQgKAFABALIABAIQADAFAEADQAKAHAMgEQANgEABgNQABgOgLgFQgFgCgGAAIgDAAgADQgrQgGAFgBAIIAAAHQACAHAFAFQAFAFAHAAQAHABAGgDQAGgEACgHQAEgLgJgKQgGgGgIgBIgDAAQgGAAgFAEgAk7hEQgGADgDAGQgDAHABAGIADAJQAGAKAOAAQAMAAAHgHQAFgGgBgIQAAgJgGgFQgEgEgHgCQgFgCgEAAQgFAAgEACgAhjhcQgIABgEAFQgGAHABAKIACAIQADAFAGADQAFAEAGgBQALgCAFgLQACgHgCgHQgCgIgFgEQgGgDgGAAIgCAAgAjYiGQgGADgDAFQgEAGAAAGQABAHAFAFQAEAFAKAEQAJADAGgBQAKgBAFgJQAEgJgEgJQgEgIgNgFQgIgCgGAAIgGAAgABciHQgHAFABAKQgBAIAGAGQAIAHARgBQALgBADgCQAJgFAAgMQABgMgKgFQgDgCgLgBQgRAAgHAFgAgLiiQgGAAgFADQgKAFABALIABAIQADAFAEADQAKAIAMgEQAMgFABgNQABgOgLgFQgEgCgGAAIgDAAg");
	this.shape_2.setTransform(49.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.biolog, new cjs.Rectangle(0,0,99,94.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("EhlRAA8IAAh3MDKjAAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-648.1,-6,1296.4,12), null);


(lib.patriot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqEGGIAAsLIUJAAIAAMLgApjD/IgDAIIgDAHIADAIIAKAHITLADIAHgDIAFgFIAFgHIAAgIIgCgHIgLgIIzIgCIAAACIgHAAIgHAFgAkQAtIgCAIIgCAHIACAIIAKAHIB4ABQAzAkA0AhQAYAPAPgDQAIgCAQgRQAggiAngbIBaABIAHgDIAFgFIAFgHIAAgIIgCgHIgBgBQACgEgBgGQgBgIgGgGQgEgEgJgFQAVgYAAgbQAAgTgLgQQgMgQgRgDQgKgBgJAEQgKAEgCAJQgCAIAEAIIgDAAIhGAAIhchGQgYgPgOAFQgFACgDADIgPAJQgUALgJAHQgIAHgRAYIgLAPIhdAAQgWgBgHALQgFAHAEAJQAEAJAHAEIAIADQADAIAMAJIAVAQIgJAHQgKAJgEAIIgFAAIAAACIgHAAIgIAFgApGkwIgCAIIgDAHIADAIIAKAHISZADIAHgDIAFgFIAFgHIAAgIIgDgHIgKgIIyVgCIAAACIgIAAIgIAFgAgwBeIgZgSIBmABIgaATQgMAKgHABIgCAAQgMAAgSgNgAh9AmIgngbQANgNALgQICvgCQAoAfAZAMIABAAIgKAIIgMAJIjMgCgAhtg8QAIgKAFgEIAPgHIAOgHIAEgDQAUAKAdAVg");
	this.shape.setTransform(42.5,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1800FF").s().p("ApnEpIgKgHIgDgHIADgIIACgIIAIgFIAHAAIAAgCITIACIAKAIIADAHIAAAIIgFAIIgFAEIgIADIzKgDgAg0CdQg0ghg0gkIh3gBIgKgHIgDgIIADgHIACgHIAIgGIAHAAIAAgCIAEAAQAFgIAKgJIAJgHIgWgRQgLgJgDgHIgIgDQgIgEgDgJQgEgJAFgHQAHgLAWABIBdABIALgQQAQgYAJgGQAJgIAUgKIAPgJQADgEAFgCQAOgFAXAPIBdBGIBGAAIADAAQgFgHADgJQACgIAKgFQAJgEAKABQARADAMARQALAPAAATQgBAbgUAYQAJAFAEAEQAGAGABAIQABAGgCAFIAAAAIADAIIAAAHIgFAHIgFAFIgIADIhagBQgmAbggAiQgPARgJACIgGABQgOAAgTgNgAg7BqQATAOAMgBQAIgBANgKIAZgTIhmgBgAiXgFQgLAOgNAOIAmAcIDMABIAMgJIALgIIgBAAQgZgMgogfgAB1gJIgQAAIAYAOQAKgJAHgLQgIAFgRABgAjTgCIADgCIgHAAgAhOhMIgOAHIgPAHQgFAFgIAJIBfAAQgdgVgUgKIgEADgApJkGIgKgHIgDgIIADgHIACgHIAIgGIAHAAIAAgCISWACIAKAIIADAIIAAAHIgFAIIgFAEIgIADIyYgDg");
	this.shape_1.setTransform(43.6,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F8F8").s().p("ACKgDIAPgBQASAAAIgFQgHAJgKAKIgYgNgAiyAAIAHAAIgDADg");
	this.shape_2.setTransform(40,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.patriot, new cjs.Rectangle(-22,7.1,129,78), null);


(lib.superhot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2121").s().p("AIxDgIgogBIgLgCIgLgIQgJgJgDgIQgDgHAAgPQAAgMAFgEQAFgEAIABQANAAAMAHQAHAFAFABQAIADAFgGQACgDAAgIQABgJABgDQACgGAHgBQAEgBAIAEIALAFQADABAOABQAJAAAFAFQAEAFACAMQABAOgBAPQgBALgFAEQgDAFgJAAIgPABQgNAFgIACIgFAAIgFAAgAAfDEQglgJgsgtQgegegYgiQAKgFAQADQAJABATAFQAPADANgEQAPgEADgMQADgLgLgVQgLgVADgLQAUAPAdgGQAagFAVgSQAQgQAOgaQAIgQANghQgCBKAGBDQACAaALAKQAKAJAPgBQAPgCAMgJQAIgGAMgOQANgOAHgGQgVArgMAVQgUAigXAWQgbAbggANQgYAIgWAAQgMAAgMgCgAoYhOQgMgFgEgBIgKgBIgLgBQgGgBgDgFQgEgFADgFQgGgCgPgBQgMAAgFgGQgDgEAAgMIAAgvQAAgJACgEQAEgHAHACIAPAPIANgCIAAggQAAgIADgDQAEgCAFADQADADADAGIAMAZQAGAAAIgCIAOgEQATgEAHAJQAFAGAAAOIABAqQgBAWgEAKQgCAIgHAFQgGAGgIAAIgBAAQgGAAgIgDg");
	this.shape.setTransform(38.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBCC4F").s().p("AErG0QiYgLhcAKIgvAGQgbADgSABQgdACg6AAIkCgBIghgBQgTgBgPgCQgWgEgsgMQgogJgaAIQAEhFglg7IgOgWQgGgNABgLQAagCAiApQAkApAYACQgGgtAMgvQAtAdAeAtIAlAIIAChXQAAgHAEgFQADgGAFACQANApApAiQAbAXA2AfQAEgGgBgJIgCgRIAAgBIgUgPQgXgTgOgSQgHgJgQgcIgrhLQgUgiAKgSQAMgTAoACQg4hrALh6QADgQAFgEQAMgIATAOIBDA6QAoAiAhALQgih5AFh8QABgUAJgHQANgJAYARQA3ApAuA0IBDi4QAJgfATAAQAUAAAIAmQAPBGAcBFQAOAiAQAMQA7heAZhuQADgPAGgFQAIgHALADQAKADAGAJQAIAMABAaQAHBaAWBWQATgnAcgrQAMgTALgGQAIgEAJABQAJABAFAGQAHAKgGAZQgNAvgCCFQgCBygeA7QALgBALgKIASgTQAKgLAMgEQAPgFAIAJQAIAHgCAPIgIAaQgEALgIAqQgTBag7BJQgRAVgTASIACANIBVghQAPgGAIACQASAGgBAiQAegOARABQAMABAKAIQALAIAAAMQAagEAMgBQAVgBAQAGQATAHAKARQAMARgGASQgLAgg/ABIgEAAQg8AAi1gNgAhoBwQAYAhAeAfQAsAsAlAJQAiAIAkgOQAhgMAbgbQAWgXAUgiQANgVAUgqQgHAFgNAPQgMANgIAGQgMAKgOABQgQACgKgJQgKgKgCgaQgGhFABhJQgNAhgIAQQgNAZgRARQgUATgbAFQgdAFgUgOQgDALALAUQAMAVgDALQgEAMgPAFQgNAEgPgEQgTgFgJgBIgKAAQgJAAgHADgAIdFHQgQgBgFgEQgFgDgBgGQgBgGAEgDQgHgIgNgFIgYgIQgggJgGgUQgDgJAEgOQAGgQACgJQACgKgBgOIgBgYQAAgSAGgHQAFgFAHAAQAHAAADAFQAEgiAJgdQAEgJAFAAQADAAADAEIA2BFIANg9QACgNAJAAQAWATANAbQANAbABAcIAtgqQAJgKAIADQAHADgBAPQgCAbgKAkQgOA1gPAZQgYAqgnALQgOAEgYAAIgMgBgAHpC/QgFAEAAANQAAAPADAHQAEAHAJAJIALAIIALACIAnABQAFABAFgBQAIgBANgGIAPAAQAJgBAEgEQAEgFABgLQABgOgBgPQgBgMgFgFQgEgEgKgBQgOAAgDgBIgLgGQgHgDgFABQgGABgDAGQgBADAAAJQAAAHgDAEQgFAFgIgDQgFgBgHgFQgMgGgMgBIgDAAQgHAAgEADgAouCbQgFgEgBgIIABgNQgCgOACgHQACgJAGAAQAHAAADAKQACAHAAAUQAAAIgCADQgDAIgIAAIgCgBgAKoAZQgKgIgDgGIgCgFIAAgJIABgJIAFgHQAHgIAFgBQADgBACABIADADQAFAMgBAVIgBAJQgEAJgIAAIgCgBgAnxAAIhQgJIglgFQgVgFgOgIQgRgKgMgRQgMgRgEgUQgDgWAHgSIANgZQAFgNgBgTIgCgiQgBgMAEgGQAEgHAKgBQAJAAAHAFQAJAHAJAWIAKgCQADgWATgLIAZArQAHAAADgGQAEgGAAgIIAAgNQABgIADgEQAGgHAKACQAJABAGAHQAIAJAEAXQAFAXAJAHQAPggAXgYQAKALABAcQABApAAAUQgCAigGAaIgHAZQgEAPgBALQgBATgGAGQgGAGgOAAIgIAAgApuiZQgCAEAAAIIAAAwQAAALAEAFQAEAFANABQAPAAAFADQgCAEADAFQAEAFAFACIALABIALABQAEAAALAFQAJAEAGAAQAIgBAHgFQAGgFADgIQAEgKAAgWIgBgqQAAgPgEgFQgIgJgTAEIgOAEQgIACgGgBIgMgZQgCgFgEgDQgFgEgEADQgDADAAAHIAAAgIgNACIgPgOIgDgBQgFAAgDAGgAISgXQgOgBgBgHQARgSACgMIAEgOIAFgHQACgDAAgFIABgIQABgHAFgHQAGgGAHgCQAFgCAEADQAFACACAEQAEAHAAAMQABAZgFANQgDAJgNARQgFAHgDABIgLABgAHVibQgCgCgBgFQgBgHgCgCIgFgEQgCgDgBgGIgBgKIgFgKQgDgFgBgEQADgHAIABIAJACQAEAAAGgEQAIAFACANIAAAVQAAARgDAFQgBAEgEACIgDABIgFgCgAlJkmQgBgEgGgCIgKgCQgEgCgHgHIgGgIIgBgJIAAgQQAAgJADgDQAEgFAIABQAFAAAIAEIAEgJQADgFAFABQAFABACAGQADAGAAAJIAAAPIAAAQQAAAJgDAGQgBAEgEADIgEABIgDgBgAoalOQgFgGgBgDIAAgEIgEgGQgFgFgBgIIABgOQAAgEACgCIAFgCIAQgBQALAAACAFQACAEgDAFIgEAIQgCAEAAAJQABAJgCAEQgEAIgHAAIgCgBg");
	this.shape_1.setTransform(38.2,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.superhot, new cjs.Rectangle(-31.3,0,139.1,89.9), null);


(lib.hot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2121").s().p("AghCVQgngJgrgsQgfgfgYghQALgFAQACQAJABASAFQAPAEANgEQAPgFAEgMQADgLgLgUQgLgUADgLQAVAOAcgFQAbgFATgTQARgRAOgaQAIgQAMghQgBBKAGBFQACAZALAKQAKAJAPgCQAPgBAMgKQAIgGAMgNQANgOAHgFQgVApgMAVQgUAigXAXQgbAbghAMQgXAJgVAAQgMAAgMgDg");
	this.shape.setTransform(44.8,53);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBCC4F").s().p("AgLG2QhegGhPguQgQgJgjgYIgOgKQgdgUgOgLQgWgTgOgSQgHgJgRgcIgrhLQgUgiALgSQALgTApACQg4hrALh6QACgQAGgEQALgIAUAOIBCA6QAoAiAhALQgih5AFh8QABgUAKgHQANgJAXARQA3ApAuA0IBDi4QALgfASAAQATAAAIAmQAPBGAcBFQAOAiARAMQA7heAZhuQADgPAGgFQAHgHALADQALADAGAJQAIAMABAaQAHBaAVBWQAUgnAbgrQANgTALgGQAIgEAIABQAKABAFAGQAHAKgHAZQgMAvgCCFQgCBygeA7QALgBALgKIASgTQAJgLANgEQAOgFAJAJQAIAHgCAPIgIAaQgFALgIAqQgSBag8BJQg7BJhUAlQhJAghRAAIgYgBgAiDB7QAYAhAfAfQArAsAmAJQAhAIAkgOQAhgMAbgbQAXgXAUgiQAMgVAVgqQgHAFgNAPQgMANgIAGQgMAKgPABQgPACgKgJQgLgKgCgaQgGhFABhJQgMAhgIAQQgOAZgRARQgUATgbAFQgbAFgVgOQgDALALAUQALAVgDALQgEAMgPAFQgNAEgPgEQgSgFgJgBIgKgBQgKAAgHAEg");
	this.shape_1.setTransform(40.9,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hot, new cjs.Rectangle(0,0,81.8,87.8), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,62);


(lib.scoring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.scoring = new cjs.Text("0", "bold 33px 'Assistant'", "#00C017");
	this.scoring.name = "scoring";
	this.scoring.textAlign = "right";
	this.scoring.lineHeight = 45;
	this.scoring.lineWidth = 100;
	this.scoring.parent = this;
	this.scoring.setTransform(102,2);

	this.timeline.addTween(cjs.Tween.get(this.scoring).wait(1));

}).prototype = getMCSymbolPrototype(lib.scoring, new cjs.Rectangle(0,0,104,47.2), null);


(lib.scorer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiWAZQgCgDAAgIIgBgMQAAgIADgEQAEgEALgBQAJAAADADQAGAEAAAKIAAALQgBAHgDADQgCADgHABQgGADgEAAQgGAAgEgFgAB7ALQgGgDgBgEIgBgGIAAgJQABgFADgDQADgDAIgBQAHgBAEACQAFACAFAJQADAHAAAEQAAAEgEAEQgDAEgFACIgHABQgGAAgGgEgAgKAIQgJAAgDgEQgCgEAAgDQAAgFABgFQACgEAGgFQAHgFAFgBQAHgDAEAFQAFAEABAKQAAAIgDAEQgGAJgMAAIgDgBg");
	this.shape.setTransform(59.7,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("ACLEgQgWgEgRgPQgOgNgNgUQgJgOgKgYQgkhSgOhAQgRhRANhEQAEgOAGgFIAGgDIAGgDQAFgDAGgNQASgpASgYQANgSAgggQAVgUANgIQANgGAMgCIAZAEQAPAHAPAUQAmAyANBLQAJAzAABUQgBAmgCASQgEAfgPAoQgUA6geA1QgIAQgHAIQgKANgLAGQgMAHgPAAIgOgCgACoiCQgeAtgbAxQgEAJgBAEIABANIAPBdQAGAcANAbQACAEACAAQAEACAFgFQAIgJAGgXIAShEQAJgmAAgSIAAgdIgCgYQgDgggDgNQgDgNgGgMQgFACgFAIgAiWEYQgEgEAAgKIgEkiQg1ATg4ABQgLAAgFgDQgEgEAAgGQAAgHADgFQAEgGANgJQA4gkAyg+QAngxAohJQAKgRAKACQAMADgCAVQgCAkgIBEQgJBFgCAjQgCAagBA0QgBBuAIB1QABAMgEAFQgEAFgOACIgqACIgEAAQgLAAgDgEg");
	this.shape_1.setTransform(55.9,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAC32B").s().p("ADaB0IgigHIgZgDQgmgFgqgCQgvgChdABQgfABgOABQgZADgSAGIgLADQgGACgEgBQgJgBgMgLQgoghgugbQgbgQgJgHQgTgOgHgQQgFgMAGgHQAHgHASAJQAdAQAoALQAYAGAwAJQAHg1AMg1QACgKAFgHQAGgIAIACQAEABAEADIAGAJQAiA1AzAkIA6hXQALgQAKABQALABAHAWQALArAVAoIBphWQAPgMAIAEQAOAGgIAZIgUBDIBmgVQAVgEAHAJQAIAMgUAUQgqAogeAxQgKAPgHACQgDACgFAAQgFAAgIgCgAh+AqQgDAEAAAJIABAMQAAAIACADQAEAFAGAAQAEAAAGgDQAHgBACgDQADgDABgHIAAgLQAAgLgGgEQgDgDgJAAQgLABgEAEgACaAdQgIABgDADQgDADgBAFIAAAJIABAHQABAEAGADQAJAGAKgDQAFgCADgEQAEgEAAgFQAAgEgDgHQgFgJgFgCIgIgBIgDAAgAAUAYQgFABgHAFQgGAFgCAEQAAAFAAAFQAAAEABAEQADAEAJAAQAQABAGgKQADgEAAgIQgBgKgFgEQgDgDgEAAIgFABg");
	this.shape_2.setTransform(57.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scorer, new cjs.Rectangle(23.1,-2.9,68.5,80.3), null);


(lib.RoundedRectangle3svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rounded Rectangle 3.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4E4E4").s().p("A2aD6QgqAAgdgdQgdgdAAgqIAAkrQAAgqAdgcQAdgeAqAAMAs1AAAQApAAAdAeQAeAdAAApIAAErQAAAqgeAdQgdAdgpAAg");
	this.shape.setTransform(153.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,50);


(lib.numbaone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82525").s().p("ADIBLQgOgCgLgYIgSgtQgDgLAAgMQAAgLAEgGQAEgGAMgGQAPgGAEgEQgEgCABgFQABgEADgDQAHgFAJAFQAFAEAHAIIAYAdQAOATAAAKQAAAIgHALIgOASQgIASgGAIQgKAOgMAAIgDAAgAgRBAQgOgEgLgXQgMgZgBgNQgBgMAFgHQAEgGAOgJQAMgIACgIIACgJQAEgIALAEQALAEAQAVQAOATADALQAHASgJAPQgCAEgNALQgMANgHAFQgJAHgJAAIgFAAgAjuAvQgHgFgDgNIgBgLIgCgKQgIgOAAgJQAAgKAOgOIAXgVQAHgHAGgCQALgBALAPIAUAfQAMAUgGAKQgCAGgKAHIggAVQgOAKgKAAQgFAAgEgDg");
	this.shape.setTransform(39.4,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D825").s().p("ACCEqQgfgBhagJIl6goIgBAAQgEAAgDgCIgBgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgCQgFg5ALhTQAPhdAFguQADgiADhIQADhGAEgkQABgJADgCQAIgHAOALQAZAWAYAqIApBHQAWAfAsAvQAqhQAZgpQAnhCAngwQAQgTANAEQAJADAGATQAiBlBFBVQATAXAFAIQANATADARQBPhlAqh0QAFgNAFgFQAEgEAFgBQAGAAADADQAEADACAJQA8D9gREGIgCAIQALABABAEQADAGgGAEQgGAEgIAAQhoAGhFAAQgjAAgagCgADPBEQgDACgBAFQgBAEAEADQgEADgPAHQgMAFgEAHQgEAFAAALQAAANADAMIASAsQALAZAOABQAOACALgPQAGgIAIgSIAOgSQAHgLAAgJQAAgLgOgSIgYgeQgHgIgFgDQgFgDgDAAQgEAAgEADgAgEBPIgCAJQgCAIgMAIQgOAKgEAFQgFAHABANQABANAMAZQALAYAOADQAKADANgJQAHgFAMgNQANgLACgEQAJgPgHgTQgDgLgOgTQgQgVgMgEIgGgCQgFAAgDAFgAjEBHQgGABgHAHIgXAWQgOANAAALQAAAIAIAQIACAKIABAKQADANAHAFQAMAIAVgOIAggWQAKgHACgFQAGgLgMgVIgUgfQgKgNgKAAIgCAAg");
	this.shape_1.setTransform(38.1,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnaHTQjDjCAAkRQAAkQDDjDQDFjBEVAAQEVAADFDBQDEDDABEQQgBERjEDCQjFDCkVAAQkVAAjFjCgAmPEJIF7AoQBZAJAeABQBPAECcgIQAIAAAGgEQAGgEgDgGQgCgEgKgBIACgIQARkGg9j9QgCgJgDgDQgDgDgGAAQgFABgEAEQgFAFgGANQgpB0hQBlQgCgRgNgTQgGgIgSgXQhFhVgihlQgFgTgKgDQgNgEgQATQgoAwgnBCQgYApgrBQQgrgvgWgfIgphHQgYgqgZgWQgPgLgHAHQgDACgBAJQgEAkgDBGQgDBIgEAiQgEAugPBdQgLBTAFA5IAAACQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIACACQADACADAAIACAAg");
	this.shape_2.setTransform(41.1,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numbaone, new cjs.Rectangle(-25.9,-49.8,134.1,132.2), null);


(lib.noun_201051_ccsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// noun_201051_cc.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmdHlQgXAAgQgNQgRgOAAgWQAAgYASgQQAQgNAZAAIDJAAQgjg+gkhSQhHijgChhQgChLAWgzQANgbAXgSQAvgkA5AhIAKAJQAMAMAIARQAMAVAGA7IAQB2ICIAAIC0oNQAPAoAUAtQApBdAbAjQAGAIAIADQAHADANABIARgBIAVgBQAwAAAfAiQA0A9grCLQgWBFgkBBIgZArIgIgxQgEgXgKgXQgTgtgegEQgVgDgnAKQgdAHgQAAQgfAAgbgWQgegYgWgrIgmBvQAKAFAHAKQAHALAAANQAAARgNAMQgMANgSAAIgJAAIgNAnQgDAMgNAAIgGgBQgHgCgDgHQgDgGACgIIAKgbIhgAAIAAAAIhIAAQgQAAgLgLQgLgLAAgPIAAiAQAAgFgDgEQgDgDgFAAQgFAAgEADQgDAEAAAFIAACAQAAAZASASQASASAZAAIBLAAIAjD1QAGAkgWAbQgUAbgdAAgAEsgZQA1AGAcBHQAjhIANg+QAQhTgfgjQgOgQgUgFQgMgCgZABIgTABQgoAAgWgcQgigugnhXIhbEKQAUA6AmAhQAOAMATABQAOAAAZgGQAigIAVAAIARABg");
	this.shape.setTransform(65.9,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAngbAaQgaAbgnAAQglAAgbgbg");
	this.shape_1.setTransform(55.2,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E00A0A").s().p("An6H6IgbgdQi2jJAAkUQgBkoDSjSQDSjREogBQEpABDSDRQDRDSABEoQgBEpjRDRQicCcjKAoQhIAPhNAAQkoAAjSjTg");
	this.shape_2.setTransform(54.7,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-9.9,143.3,143.3);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("http://googleforms.com", "48px 'Assistant'", "#243EE4");
	this.text.textAlign = "right";
	this.text.lineHeight = 65;
	this.text.lineWidth = 482;
	this.text.parent = this;
	this.text.setTransform(240.1,-27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#243EE4").ss(3,1,1).p("AypAAIBZAAA1KAAIBFAAAs+AAIHpAAEgkzAAAIIuAAA6yAAID+AAAhTAAMAmHAAA");
	this.shape.setTransform(0.5,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#243EE4").ss(3,1,1).p("EgmlgFEMBNLAAAIAAKJMhNLAAAg");
	this.shape_1.setTransform(-2.8,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243EE4").s().p("EgmlAFFIAAqIMBNLAAAIAAKIg");
	this.shape_2.setTransform(-2.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244,-29.4,486.1,66.8);


(lib.an_Label = function(options) {
	this._element = new $.an.Label(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.megalotus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFA3").s().p("AjEDMIg6AAIgOgCQgJgCgLgGQgjgSgRgKQgbgRgSgTQgIgIgBgHIgCgKQgBgDgIgFQgHgFgIgIQgFgFAAgEQAAgHAJgDIANAAIAVAAQAMAAAJACQAHACAPAFQAIACAbAEIA5AFIARACIABABQAVAFAeAfIAhAiQAHAIAFACIAJADQAHAEABAJQABAFgCAEIgEAEQgFAEgJABQgSACgbAAIgQAAgAigCwIAGAEIgSgSQAGAJAGAFgAC7DCQgJAAgFgCQgJgFgGgBIgGgBIgFgBQgGgCgCgEQgBgDACgEQABgDAEgCQAFgDAIACIAOACQABgJADgDIAKgIQAFgEAFgIIAJgMIATgRQADgEAFgLQAFgKAFgFQADgDAFgCQAFgCAHAAIAYgBQAMAAAXgGQAYgGALgBIAxAAQAQABACAIQADAHgNAKIhLA7IgWAKIgSALQgOAJgcAOQgRAJgKABIgNAAgAnyhdQgLgFgEgGIgJgQQgFgJgGgEIgIgEQgEgDAAgDQgBgFAHgEQAFgDAFABQAHABALAKQAKAHAGABIAJABQAOACAIAKQAIANgIALQgGAIgKABIgDAAQgIAAgHgEgAHChuQgDgFAEgKIAIgQQAHgMAIgBIAIAAQADAAACgDIAEgEQAFgDAHABQAGABADAFIAJgCIAIgEQAMgEAEAIQADADgCAFQgCAFgEADQgLAGgFAEIgGAFQgCACgFABIgIAAQgHABgJAGIgOAJQgIAEgEAAQgIAAgDgFgAiuh6QgFgBgHgIQgNgMgDgIQgEgMgDgFIgHgIIgHgHQgDgFAAgFQAAgFAEgDQAGgFAIAGIALAKQAJAIAMADQAMABAEACIAIAKIAJAKQAGAGADAEQADAHAAAHQgBAHgFADQgEACgOgBIgJABQgGAAgEgCgAC8iCQgDAAgDgDQgDgCAAgDQgMgBgDgIQgCgEACgGIAGgLQAEgKADgDQAEgEANgFIAIgGQAFgDADABQAHABACANIAKAAQAHADABAFQAAAEgDAFQgMAWgWALQgHAEgEAAIgBAAg");
	this.shape.setTransform(39,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEA1F").s().p("ABMCRQACgDAAgGQgBgJgHgDIgKgEQgEgCgIgHIghgjQgcgegVgGIgCAAQhFg+g7g/QgRgSgIgNQgKgQAIgJQAGgIASAFQB4AbBrA8IAIAEQBWAxAfA1QAJARACAOIgBAJQgBALgHALQgFAIgHAGQgFAFgHAEQgYANgoAAQgMAAgLgCgAAiCBQgGgFgGgJIARASIgFgEg");
	this.shape_1.setTransform(19.6,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F247").s().p("AAhCwQgCgOgJgRQgeg3hWgwIgIgFIADgPIANg1QAGgYAGgQQAJgaAVgbQANgSAbgeQAKgMAIABQAJACADAKIAEARQACARAOAdQAPAgAEAOIAFAbIAEAcQAFAUARAmIADAGQAFAPgBALIgDANIgHAWQgGAPgOAPQgJAKgSAQIgOAKIABgIg");
	this.shape_2.setTransform(35.9,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("AiqCVIgTgJQAHgGAFgIQAHgLABgLIANgLQATgQAIgJQAOgPAHgPIAGgWIAEgOQABgJgGgPIgCgGQAOgJAQgHQAqgVBVglQA1gZAxgfQAOgHAGgBQAGAAAEADQAGAEAAAFQAAAHgKAJQgzAugUAuQgHASgLAmQgFAPgGAOQgFACgEADQgEAEgFAKQgGAMgDADIgTASIgIAMQgGAIgEADIgLAIQgCAEgBAIIgOgBQgHgCgGADQgEABgBAEQgCADABADQACAFAGABIAFABQgMAIgJACQgNAFgZAAQg0gBgpgRg");
	this.shape_3.setTransform(56.1,46.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339900").s().p("AC3BZQgRgCgLgKIgJgMQgIgKgDgIQgFgMAAgZQAAgPADgGIADgGIADgGIgBgGQAAgJAKgGQAKgGATgDIAUgCQAdgDAQAIQAKAFAMAMQAVAVAIAUQAGANgCAMQgDAOgOALQgKAGgSAHIgnAOQgPAEgLAAIgEAAgACuggQADAGgHAGIgKAGQgFAEgDAEQgCAFAAAKQAAAUADAJQAEAJALANIAHAGQAGADAGgBQAQgBANgEIATgHIAbgLQAPgHABgJQAAgEgDgIQgFgMgFgGIgHgJQgIgKgEgEQgIgGgGgCIgKgDIgLAAQgOAAgXADgAj4BSQgJgDgJgMIgJgOIgJgcQgIgbAFgNIACgGIgBgJQgBgJAKgKQASgTARgCIAVAAIAVAAQAHACALAHQAJAEAHAGQAJAHAGAIQAWAcAAAdQAAAMgDAIQgGAOgZAPQgTALgPACIgmABQgJAAgEgCgAjrgsQAGABAAAHQgBAHgIAEIgNAEQgIADgEAFQgGAFAAAFQgBAEACAFIALAmQADAGAHAJQACADACAAIAEABIAkgBIAJAAQAGgCAGgDIASgJQALgHADgHQACgGgBgJQgBgMgDgHIgJgRQgJgNgDgDIgNgIIgMgIIgJgBIgVAAIgNABQgJABgGAIQADAAAIgDIAIgCIADABgAl4BRQgGgBgCgEIgCgIQgKhIACgpQgDABgFAGIgJAKIgTAPQgJAIgFADQgIAEgLACQgPAEgNgDQgKgCgCgFQgBgDABgEQABgDADgCQADgCAJABQALACAIgBQANgDAUgRIAyguQAHgIAGAAQAEAAADADQADADAAADQAAAEgFAIQgGANgBAaQAAAdACAVQACARADAIIACAIIABAMQAAAHgDAEQgDADgEAAIgCAAgAgBBFQgMAAgGgCQgQgEgNgQQgcgiAEgoQABgHADgDIAGgFQAEgEAFgJQAHgHAMgCQAFgBARAAQAcgBAKABQAXADANAMQAHAGAJASQALAXABANQADAXgNANQgGAFgKAEIgRAHIgQAGIgOABgAgpAWQAEAHAKALIAGAFQAFACAHAAIAeAAIAMgBIAcgLIAGgFQAEgEAAgJQgBgOgFgLIgHgNQgJgQgIgEQgHgEgMAAIgpAAQgLAAgFACQAGAFAAAFQgBAHgIADQgFACgIgBQgDAXANAVgAFzA9QgVgGgKgPQgJgOABgfIABgYQABgPAJAAQAFAFAKgDQAFgCAJgGQAMgHAQgCQALgBATAAQAYAAAMADQAVAGAKAOQAJANgBAVQgBAPgGAMQgHANgNAJQgRANgSAEQgJACgZAAQgXAAgPgEgAGHgjQgOADgLAMQgKALgDAOQgCAMAEAIQADAFAJAGQAKAFAFABQAGABALAAQAeAAALgCQAYgGALgOQAOgRgGgVQgEgJgCgDQgFgGgHgCQgFgBgKAAIggAAQgUABgHACg");
	this.shape_4.setTransform(33.6,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megalotus, new cjs.Rectangle(-16.9,0,110.6,63.4), null);


(lib.lotus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEA1F").s().p("AAiCBQgLgJgLgVQgMgYgHgIIgRgRQhMhDhAhEQgRgSgIgNQgKgQAIgJQAGgIASAFQB4AbBrA8IAIAEQBWAxAfA1QAJARACAOIgBAJQgBALgHALQgFAIgHAGQgFAFgHAEQgYANgoAAQgsAAgVgSg");
	this.shape.setTransform(19.6,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F247").s().p("AAhCwQgCgOgJgRQgeg3hWgwIgIgFIADgPIANg1QAGgYAGgQQAJgaAVgbQANgSAbgeQAKgMAIABQAJACADAKIAEARQACARAOAdQAPAgAEAOIAFAbIAEAcQAFAUARAmIADAGQAFAPgBALIgDANIgHAWQgGAPgOAPQgJAKgSAQIgOAKIABgIg");
	this.shape_1.setTransform(35.9,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AiqCVIgTgJQAHgGAFgIQAHgLABgLIANgLQATgQAIgJQAOgPAHgPIAGgWIAEgOQABgJgGgPIgCgGQAOgJAQgHQAqgVBVglQA1gZAxgfQAOgHAGgBQAGAAAEADQAGAEAAAFQAAAHgKAJQgzAugUAuQgHASgLAmQgcBShGA1QgTANgNAEQgNAFgZAAQg0gBgpgRg");
	this.shape_2.setTransform(56.1,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339900").s().p("AEfBZQgSgCgKgKIgKgMQgHgKgDgIQgGgMAAgZQAAgPADgGIAEgGIACgGIgBgGQAAgJAKgGQAKgGAUgDIATgCQAegDAQAIQAKAFALAMQAVAVAJAUQAGANgCAMQgDAOgPALQgJAGgTAHIgmAOQgQAEgKAAIgEAAgAEWggQACAGgGAGIgLAGQgFAEgCAEQgDAFAAAKQAAAUAEAJQAEAJALANIAHAGQAFADAGgBQAQgBANgEIAUgHIAbgLQAOgHABgJQABgEgEgIQgEgMgFgGIgIgJQgHgKgFgEQgIgGgGgCIgKgDIgKAAQgPAAgWADgAiQBSQgJgDgKgMIgIgOIgKgcQgIgbAGgNIACgGIgCgJQAAgJAKgKQASgTARgCIAUAAIAVAAQAIACAKAHQAJAEAIAGQAIAHAHAIQAVAcABAdQAAAMgDAIQgGAOgZAPQgUALgOACIgmABQgJAAgEgCgAiDgsQAFABAAAHQgBAHgHAEIgNAEQgIADgFAFQgFAFgBAFQAAAEABAFIALAmQADAGAIAJQACADACAAIAEABIAkgBIAIAAQAHgCAGgDIASgJQAKgHADgHQACgGgBgJQgBgMgCgHIgJgRQgKgNgDgDIgNgIIgMgIIgJgBIgUAAIgNABQgJABgHAIQADAAAJgDIAHgCIAEABgAkRBRQgFgBgDgEIgCgIQgJhIACgpQgEABgEAGIgKAKIgSAPQgJAIgGADQgIAEgKACQgQAEgMgDQgKgCgCgFQgCgDACgEQABgDADgCQADgCAIABQAMACAHgBQANgDAVgRIAxguQAHgIAHAAQAEAAACADQADADAAADQAAAEgEAIQgHANgBAaQAAAdADAVQACARACAIIADAIIABAMQAAAHgEAEQgDADgEAAIgCAAgABlBFQgMAAgFgCQgQgEgNgQQgcgiAEgoQABgHACgDIAGgFQAEgEAGgJQAGgHANgCQAEgBASAAQAcgBALABQAXADAMAMQAHAGAJASQALAXACANQACAXgNANQgFAFgKAEIgSAHIgPAGIgOABgAA9AWQAEAHAKALIAHAFQAEACAIAAIAfAAIALgBIAdgLIAGgFQADgEAAgJQgBgOgFgLIgGgNQgJgQgIgEQgHgEgMAAIgqAAQgMAAgFACQAGAFAAAFQgBAHgHADQgGACgIgBQgDAXANAVg");
	this.shape_3.setTransform(40.7,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lotus, new cjs.Rectangle(0,0,80.9,62.9), null);


(lib.goback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8,y:-2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,69);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAyBKIgJgMIgLgIQgQgRgJgFIgNgFIgWgFIgKAAQAEAGAAANQAAANgEAGQgEAGgGACQgHACgGgCQgJgEgHgOQgDgGgBgHIgBgKQgBgVACgRQACgXAAgHIgBgQQABgKAEgFQAHgJAKABQAMABAEAKQADAGAAANIgBATIATgMIANgGQAGgDAEgHIAIgNQAGgGAIgCQAIgBAHAFQAGAFABAIQACAJgDAGQgBADgHAIIgHAIIgVAQIgEACQAYAIAPANIALAKIAMAIQALAHAFAJQAGALgDALQgEANgMACIgDAAQgIAAgHgHg");
	this.shape.setTransform(15.1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("AgSAeQgFgEgBgHQgCgHAEgGIAFgIIACgJIAAgDIABgGQAEgMALgCQAMgBAHAKIACAFIABAIIABAMIABAOQAAAHgDAFQgGAJgQAAQgLAAgHgFg");
	this.shape_1.setTransform(45,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7CF00").s().p("AhmA3IgBgDQgCgEgCgBQgEgCgFACQgEgFABgIQABgKAIgEIgCgEIgHgQQgEgIAAgGQABgMAMgMQAIgJAJgBQAIgBAOAJQANAJANALQAAgNAFgHQAFgHAJgBQAIgBAIAEQALAHAKASQAEgBAIgEQAVgNAsgOQAUgGAJAGQAGAEABAIQABAIgDAHQgEAJgQANIgSAQQAJAGgBAKIgCAHIgEAAQgIACgBAHIAAACIgJABIglADQg5AFhAAAIgMgBg");
	this.shape_2.setTransform(39.2,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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IgEAJQgCAGAFAFQAFAEAGgBQAKgDABgRQAAgXgNgUQgOgUgVgHIgHgCIABgHQABgKgJgHIATgQQAQgOADgIQADgHgBgIQgBgIgGgEQgJgHgUAHQgrANgWANQgIAFgEABQgKgTgLgGQgIgEgJABQgJABgFAGQgEAHAAAOQgNgLgNgJQgOgKgJABQgIACgJAIQgMAMAAAMQAAAHAEAJIAHAPIABAEQgHAFgCAKQAAAHAEAGIgBAAQgEADgEAEIgDAEIgCAIQAAAFADADQADAEAFAAQAFgBACgEIACgEIADgDQAFgFgBgGIANABQBAAAA6gFIAkgDIAKgCQAAAFAHAEgAlHjdQgIAGgCAFQgEAIACAHQABADAGAHQAIAIADABQAIAEAJgCQAIgBADgDQAIgGAAgOQAAgOgHgHQgGgHgLAAQgIAAgKAFgAnrjrIAWAFIAOAFQAJAFAQAQIALAJIAJAMQAIAIAKgBQAMgDAEgMQADgMgGgKQgFgJgLgHIgMgIIgLgKQgPgOgYgIIAEgCIAVgQIAHgIQAHgIABgEQADgGgCgIQgBgJgGgFQgHgFgIACQgIABgGAHIgIANQgFAGgGAEIgNAGIgTALIABgTQAAgNgDgGQgEgJgMgBQgKgBgHAIQgEAFgBALIABAQQAAAHgCAWQgCASABAWIABAJQABAHADAGQAHAPAJADQAGADAHgDQAGgCAEgFQAEgHAAgMQAAgOgEgGIAKABgADjEEIgLAAIgPgDIAbgOIABAIIAAAJIgCAAgACGjrIgegIIABAAQASgLALgEIAAAFIAAASg");
	this.shape_3.setTransform(61.2,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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CgLIgJgCQgagIgegGIgLgDIgCACIgPAPQgJAJgJAAQgNgBgGgLQgEgMAHgJQACgDAGgEIAHgGIAIgKQAFgGAJgGIAXgPQAagQASgJQAPgHAKgBQAQgBAHAMQAEAFgBAHIADADQAHAHAAASIAAAeIABASIAEAVIAAATQABAVgFAHQgGAIgJAAIgCAAQgIAAgFgGgABjj1IgBABIAeAHIAAAAIAAgSIAAgEQgLAEgSAKgAliiHIgGgEQgFgEgBgHIgBgLIgDgGQgCgHAFgEQAFgDAFACQADABAEAGIADAHIADAOQACAHgDAEQgDAFgFAAIgBAAgAhmirQgFgFACgFIAEgJQABgGgEgKQgJgYgQgGIgMgFQgHgDAAgFIAAgCQAAgHAIgCIAFAAIAHACQAVAHAOAUQANAUAAAXQgBARgKADIgDABQgEAAgEgEgAlHixQgDgCgIgHQgGgHgBgEQgCgHAEgHQACgFAIgGQAKgGAIAAQALAAAGAHQAHAIAAANQAAAOgIAGQgDAEgIABIgFAAQgGAAgGgCgAjHjDQgFgHABgMQABgLAGgFQAEgEAMgCQAMgCAHAAQALABAGAGQAIAHAAAPQgBAKgEAFIgEADIgCgFQgHgKgMABQgMACgEAMIgBAGQgLgDgFgHgAlhjdQgDgDAAgGIACgHIADgEQAEgFAEgCIABgBQAFgCADACQADABABAEIABADQABAHgFAFIgDADIgCADQgCAFgFAAQgFAAgDgDg");
	this.shape_4.setTransform(61.8,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cards, new cjs.Rectangle(0,0,123.7,84.4), null);


(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.distext = new cjs.Text("ירושלים", "bold 33px 'Assistant'", "#FFFFFF");
	this.distext.name = "distext";
	this.distext.textAlign = "center";
	this.distext.lineHeight = 45;
	this.distext.lineWidth = 750;
	this.distext.parent = this;
	this.distext.setTransform(397.2,14.5);

	this.instance = new lib.black();
	this.instance.parent = this;

	this.instance_1 = new lib.green();
	this.instance_1.parent = this;

	this.instance_2 = new lib.red();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.distext}]}).to({state:[{t:this.instance_1},{t:this.distext}]},1).to({state:[{t:this.instance_2},{t:this.distext}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,802,74);


(lib.asdasd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("אל תלחץ על כפתור הוויתור", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsbACQAHgPAjAAIYMANQgHANgcAAIlFABQpzAApbgMg");
	this.shape.setTransform(118.1,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"אל תלחץ על כפתור הוויתור",font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{text:"תגיע ל 10000 נקודות",font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("תגיע ל 10000 נקודות", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsbACQAHgPAjAAIYMANQgHANgcAAIlFABQpzAApbgMg");
	this.shape.setTransform(118.1,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("ענה על 10 שאלות נכונות ברצף", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChAPIzPgOQAWgMAhgEQAUgDAnABIfrARQizARkYABIguAAQioAAjtgDg");
	this.shape.setTransform(115.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("תגיע ל 1000 נקודות", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmoAYIkjAAQgKAAgIgEQgJgEABgIIDUgDQC8gCBdgHQA1gEBpgKQBMgGCrAAIFkACQBOAAAnAEQBBAHAwASInngGQjsgDh8AJQhtALg3AEQguADhFAAIgpgBg");
	this.shape.setTransform(119.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("ענה על 10 שאלות נכונות", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMyAWQgJgBgpgJQgrgLg4gBQghgChDAAQqUAGrYABQgjAAgLgOQLYgPLWACQBeAAAwAGQBOAIA5AZQgOAGgSAAIgQgBg");
	this.shape.setTransform(117.1,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("תפגין ידע בביולוגיה", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGAQQiogBhBgDQhvgGhugNQALgKAdABQK0AUK1gOQAHACABAIQAAAHgFAEQgHAGgTAAg");
	this.shape.setTransform(118,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.achiv1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("ענה על 3 שאלות נכונות ברצף", "18px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvQADQgsABgVgCQglgCgbgJQB1gLCRgDQBhgDClAAQLPABK8ASQBZACAvAFQBLAHA5AUQwRgswRAUg");
	this.shape.setTransform(120.1,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"18px 'Assistant'"}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"18px 'Assistant SemiBold'"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,27.6);


(lib.yousure = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.giveuptext = new cjs.Text("נותרו לכם עוד 3 שאלות כדי לעקוף את", "36px 'Assistant SemiBold'", "#878787");
	this.giveuptext.name = "giveuptext";
	this.giveuptext.textAlign = "center";
	this.giveuptext.lineHeight = 49;
	this.giveuptext.lineWidth = 752;
	this.giveuptext.parent = this;
	this.giveuptext.setTransform(434.5,135.1);

	this.text = new cjs.Text("רגע, אתם בטוחים שאתם רוצים לוותר?", "bold 48px 'Assistant'", "#C32E2E");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 724;
	this.text.parent = this;
	this.text.setTransform(434.5,47.6);

	this.yesiwant = new lib.yesiwant();
	this.yesiwant.parent = this;
	this.yesiwant.setTransform(205,573.5,1,1,0,0,0,155,34.5);
	new cjs.ButtonHelper(this.yesiwant, 0, 1, 2, false, new lib.yesiwant(), 3);

	this.noidont = new lib.goback();
	this.noidont.parent = this;
	this.noidont.setTransform(654,573.5,1,1,0,0,0,155,34.5);
	new cjs.ButtonHelper(this.noidont, 0, 1, 2, false, new lib.goback(), 3);

	this.instance = new lib.Rectangle_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.noidont},{t:this.yesiwant},{t:this.text},{t:this.giveuptext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yousure, new cjs.Rectangle(0,0,869,647), null);


(lib.wannastopexamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.noun_201051_ccsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.1,8,0.525,0.525,0,0,0,54.7,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({regX:54.8,regY:61.5,scaleX:0.51,scaleY:0.51},0).wait(1).to({regX:54.7,regY:61.6,scaleX:0.58,scaleY:0.58},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.4,-29.6,75.3,75.3);


(lib.sidebar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.asdasd();
	this.instance.parent = this;
	this.instance.setTransform(116,675.4,1,1,0,0,0,118,13.8);

	this.achiv6 = new lib.achiv6();
	this.achiv6.parent = this;
	this.achiv6.setTransform(116,619.4,1,1,0,0,0,118,13.8);

	this.achiv5 = new lib.achiv5();
	this.achiv5.parent = this;
	this.achiv5.setTransform(116,560.4,1,1,0,0,0,118,13.8);

	this.achiv4 = new lib.achiv4();
	this.achiv4.parent = this;
	this.achiv4.setTransform(116,450.4,1,1,0,0,0,118,13.8);

	this.achiv3 = new lib.achiv3();
	this.achiv3.parent = this;
	this.achiv3.setTransform(116,398.5,1,1,0,0,0,118,13.8);

	this.achiv2 = new lib.achiv2();
	this.achiv2.parent = this;
	this.achiv2.setTransform(116,504.4,1,1,0,0,0,118,13.8);

	this.achiv1 = new lib.achiv1();
	this.achiv1.parent = this;
	this.achiv1.setTransform(116,346.5,1,1,0,0,0,118,13.8);

	this.text = new cjs.Text("משימות", "bold 22px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(116,275);

	this.sidetext = new cjs.Text("אני אוקף אותך ב X שאלות", "bold 24px 'Assistant'", "#FFFFFF");
	this.sidetext.name = "sidetext";
	this.sidetext.textAlign = "center";
	this.sidetext.lineHeight = 33;
	this.sidetext.lineWidth = 232;
	this.sidetext.parent = this;
	this.sidetext.setTransform(116,173.5);

	this.instance_1 = new lib.daewae();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,0,1.601,1.601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.sidetext},{t:this.text},{t:this.achiv1},{t:this.achiv2},{t:this.achiv3},{t:this.achiv4},{t:this.achiv5},{t:this.achiv6},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sidebar, new cjs.Rectangle(-10,0,256.1,800.3), null);


(lib.sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.vcodetext = new lib.an_Label({'id': 'vcodetext', 'label':'', 'disabled':false, 'visible':true, 'class':'ui-label'});

	this.vcodetext.setTransform(30.7,-63.5,3.4,3.4,0,0,0,49.9,10.9);

	this.linkout = new lib.link();
	this.linkout.parent = this;
	this.linkout.setTransform(-49,239.5);
	new cjs.ButtonHelper(this.linkout, 0, 1, 2, false, new lib.link(), 3);

	this.text = new cjs.Text("עכשיו יש להעתיק להדביק את הקוד שלך בלינק הבא", "48px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 65;
	this.text.lineWidth = 914;
	this.text.parent = this;
	this.text.setTransform(388.4,125.6);

	this.text_1 = new cjs.Text("הקוד שלך הוא", "48px 'Assistant'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 65;
	this.text_1.lineWidth = 302;
	this.text_1.parent = this;
	this.text_1.setTransform(590.2,-51.5);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(2,77);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-111);

	this.text_2 = new cjs.Text("זהו כמעט נגמר!", "bold 120px 'Assistant'", "#171717");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 159;
	this.text_2.lineWidth = 814;
	this.text_2.parent = this;
	this.text_2.setTransform(364,-310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text},{t:this.linkout},{t:this.vcodetext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc3, new cjs.Rectangle(-650.1,-312.8,1300.4,589.7), null);


(lib.scrtwin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.scoreup = new lib.scoring();
	this.scoreup.parent = this;
	this.scoreup.setTransform(52,23.6,1,1,0,0,0,52,23.6);

	this.timeline.addTween(cjs.Tween.get(this.scoreup).wait(1).to({y:19.2,alpha:0.933},0).wait(1).to({y:14.8,alpha:0.867},0).wait(1).to({y:10.4,alpha:0.8},0).wait(1).to({y:6,alpha:0.733},0).wait(1).to({y:1.6,alpha:0.667},0).wait(1).to({y:-2.8,alpha:0.6},0).wait(1).to({y:-7.2,alpha:0.533},0).wait(1).to({y:-11.6,alpha:0.467},0).wait(1).to({y:-16,alpha:0.4},0).wait(1).to({y:-20.4,alpha:0.333},0).wait(1).to({y:-24.8,alpha:0.267},0).wait(1).to({y:-29.2,alpha:0.2},0).wait(1).to({y:-33.6,alpha:0.133},0).wait(1).to({y:-38,alpha:0.067},0).wait(1).to({y:-42.4,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,47.2);


(lib.sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.sidebar = new lib.sidebar();
	this.sidebar.parent = this;
	this.sidebar.setTransform(1157.1,310.2,1,1,0,0,0,128.1,400.2);

	this.scoreboard = new cjs.Text("0", "bold 33px 'Assistant'", "#00C017");
	this.scoreboard.name = "scoreboard";
	this.scoreboard.textAlign = "right";
	this.scoreboard.lineHeight = 45;
	this.scoreboard.lineWidth = 176;
	this.scoreboard.parent = this;
	this.scoreboard.setTransform(991.3,-87.9);

	this.wannastop = new lib.wannastopexamp();
	this.wannastop.parent = this;
	this.wannastop.setTransform(8,-37.9);
	new cjs.ButtonHelper(this.wannastop, 0, 1, 2, false, new lib.wannastopexamp(), 3);

	this.geza = new cjs.Text("?מהי עיר הבירה של ישראל", "bold 33px 'Assistant'");
	this.geza.name = "geza";
	this.geza.textAlign = "right";
	this.geza.lineHeight = 45;
	this.geza.lineWidth = 1121;
	this.geza.parent = this;
	this.geza.setTransform(991.4,15,0.95,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.geza},{t:this.wannastop},{t:this.scoreboard},{t:this.sidebar}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc2, new cjs.Rectangle(-75.4,-90,1350.5,800.3), null);


(lib.sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.lol = new cjs.Text("", "33px 'Assistant'", "#666666");
	this.lol.name = "lol";
	this.lol.textAlign = "center";
	this.lol.lineHeight = 45;
	this.lol.lineWidth = 612;
	this.lol.parent = this;
	this.lol.setTransform(501.1,258.6);

	this.text = new cjs.Text("זיו רוזוב ואור בן ציון", "28px 'Assistant'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(774.9,445);

	this.start = new lib.start();
	this.start.parent = this;
	this.start.setTransform(486.5,552.3,1,1,0,0,0,153.5,31);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.start(), 3);

	this.wannastpex = new lib.wannastopexamp();
	this.wannastpex.parent = this;
	this.wannastpex.setTransform(172,217.6,1,1,0,0,0,79,16);
	new cjs.ButtonHelper(this.wannastpex, 0, 1, 2, false, new lib.wannastopexamp(), 3);

	this.text_1 = new cjs.Text("בהצלחה", "28px 'Assistant'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 90;
	this.text_1.parent = this;
	this.text_1.setTransform(880.6,404.4);

	this.text_2 = new cjs.Text("נא לא לסגור את הדפדפן ולשים לב להנחיות הסיום", "bold 33px 'Assistant'", "#961111");
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 647;
	this.text_2.parent = this;
	this.text_2.setTransform(159.8,319.2);

	this.text_3 = new cjs.Text("אתה מפסיק כשנמאס לך", "bold 28px 'Assistant'");
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 317;
	this.text_3.parent = this;
	this.text_3.setTransform(462.7,190.1);

	this.text_4 = new cjs.Text("הנך עומד לענות על מספר שאלות טריויה פשוטות, ברגע שלחצת על תשובה\nהתשובה תקלט מיד ואין אפשרות לחזור אחורה או לשנות את התשובה שנקלטה\nכמו כן אין הגבלת זמן -                                                      על ידי לחיצה על הכפתור", "28px 'Assistant'", "#0A0A0A");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 968;
	this.text_4.parent = this;
	this.text_4.setTransform(970.1,111.7);

	this.text_5 = new cjs.Text("שלום משתתף יקר", "bold 70px 'Assistant'");
	this.text_5.lineHeight = 94;
	this.text_5.lineWidth = 491;
	this.text_5.parent = this;
	this.text_5.setTransform(491.4,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.wannastpex},{t:this.start},{t:this.text},{t:this.lol}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc1, new cjs.Rectangle(0,-16,984.7,599.3), null);


(lib.distand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.disty = new lib.block();
	this.disty.parent = this;
	this.disty.setTransform(401,37,1,1,0,0,0,401,37);

	this.timeline.addTween(cjs.Tween.get(this.disty).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,802,74);


(lib.achievementboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.achievetext = new cjs.Text("ענית נכון על 3 שאלות", "bold 32px 'Assistant'");
	this.achievetext.name = "achievetext";
	this.achievetext.textAlign = "center";
	this.achievetext.lineHeight = 44;
	this.achievetext.lineWidth = 500;
	this.achievetext.parent = this;
	this.achievetext.setTransform(305.8,33.3);

	this.instance = new lib.RoundedRectangle3svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(352.8,57.9,2.297,2.297,0,0,0,153.6,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.achievetext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.achievementboard, new cjs.Rectangle(0,0,705.1,114.9), null);


(lib.achieve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_82 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(1));

	// Layer 1
	this.achieve = new lib.achievementboard();
	this.achieve.parent = this;
	this.achieve.setTransform(352.6,57.4,1,1,0,0,0,352.6,57.4);

	this.timeline.addTween(cjs.Tween.get(this.achieve).wait(1).to({regX:352.5,x:352.5,y:50.8},0).wait(1).to({y:44.1},0).wait(1).to({y:37.4},0).wait(1).to({y:30.7},0).wait(1).to({y:24.1},0).wait(1).to({y:17.4},0).wait(1).to({y:10.7},0).wait(1).to({y:4},0).wait(1).to({y:-2.6},0).wait(1).to({y:-9.3},0).wait(1).to({y:-16},0).wait(1).to({y:-22.7},0).wait(1).to({y:-29.3},0).wait(1).to({y:-36},0).wait(1).to({y:-42.7},0).wait(48).to({y:-37.7},0).wait(1).to({y:-32.7},0).wait(1).to({y:-27.7},0).wait(1).to({y:-22.7},0).wait(1).to({y:-17.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-7.6},0).wait(1).to({y:-2.6},0).wait(1).to({y:2.4},0).wait(1).to({y:7.4},0).wait(1).to({y:12.4},0).wait(1).to({y:17.4},0).wait(1).to({y:22.4},0).wait(1).to({y:27.4},0).wait(1).to({y:32.4},0).wait(1).to({y:37.4},0).wait(1).to({y:42.4},0).wait(1).to({y:47.4},0).wait(1).to({y:52.4},0).wait(1).to({y:57.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705.1,114.9);


// stage content:
(lib.triviaplusGAMIFICATION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$("#canvas").css("direction", "rtl");
		
		
		var home= this;
		
		var counter = 0;
		
		var achievements = [lib.hot,lib.biolog,lib.scorer,lib.cards,lib.lotus,lib.megalotus,lib.superhot,lib.patriot];
		
		var achievementlist = [["hotstreak","ענית נכון על 3 שאלות"],["biologist","ביולוג"],["scorer","10 שאלות נכונות"],["cards","אס בוכה קינג זוכה"],["lotus","הגעתם רחוק"],["megalotus","וואו.. איך... אני לא מבין.."],["superhot","אשששש"],["patriot","ציוני אמיתי"]];
		
		var qb = [
		["כמה שיניים יש לאדם בוגר","27","32","42","23","ftff"],
		["דיג'ירידו הוא?","אל מהמסורת הקמבודית","שמו האמצעי של ראש ממשלת קובה","כלי נגינה אבורג'יני","עיר בבורמה","fftf"],
		["איך קראו לשימפנזת המחמד של מייקל ג'קסון?","יעקב","ג'ייסון","מייקל","באבלס","ffft"],
		["בלוגו של גוגל, מהו צבעה של האות L","ירוק","אדום","כחול","צהוב","tfff"],
		["מהי האוניברסיטה העתיקה ביותר בעולם?","אוניברסיטת קיימברידג'","אוניברסיטת בולוניה","אוניברסיטת אוקספורד","אוניברסיטת פירנצה","ftff"],
		["איך קוראים לחללית של האן סולו ממלחמת הכוכבים?","זרגון 17","מילניום פאלקון","האקסבייר","צ'ובאקה","ftff"],
		["מה היה שמו הפרטי של פלורנטין (שעל שמו קרוי הרחוב)?","שלמה","יעקב","משה","דוד","ffft"],
		["מי מבין הבאים לא זכה בפרס נובל?","יאסר ערפאת'","אלברט איינשטיין","ווינסטון צ'רצ'יל","מהטמה גנדי","ffft"],
		["מי מהחיות הבאות נחשבות לחרק?","אלמנה שחורה","עקרב צהוב","שפרירית","צפע","fftf"],
		["מי מהחיות הבאות היונק הגדול ביותר?","צלופח חשמלי","כריש לבן","כריש לוויתני","ברווזן","ffft"],
		["איזה סט קלפים חזק יותר בפוקר מבין הבאים?","נסיך תלתן, נסיך לב, 7 תלתן, 7 לב, 6 לב","מלך תלתן, מלך עלה, מלך לב, 6 תלתן, אס עלה","נסיך תלתן, 9 לב, מלכה עלה, 10 עלה","מלך תלתן, נסיך תלתן, 10 תלתן, 7 תלתן, אס עלה","fftf"],
		["איזה אוקיאנוס נחשב לעמוק ביותר?","השקט","האטלנטי","ההודי","הדרומי","tfff"],
		["אילו מבין המדינות הבאות לא הייתה במלחמה משנת 1814?","פרו","שוודיה","שוויצריה","מלטה","ftff"],
		["באיזו שנה שנה נפטר הזמר המפורסם פרדי מרקורי?","1990","1987","1991","1989","fftf"],
		["מנכל מיקרוסופט הוא?","ביל גייטס","סטיב כאלמר","רופרט מרדוק","סטיב ג'ובס","ftff"],
		["מי מהבאים אינו סלט?","ניסואז","וולדרוף","קיסר","רוסיני","ffft"],
		["מה שמה של החללית הראשונה שנחתה על הירח?","שביט 6","ג'ימיני 1","גלילאו 2","אפולו 11","ffft"],
		["מהי עיר הבירה של מדינת ישראל?","ירושלים","עכו","קיסריה","תל אביב","tfff"],
		["מי אמרה 'אם אין לחם, שיאכלו עוגות'?","המלכה ויקטוריה","מרי אנטואנט","מרי מלכת הסקוטים","מרגרט תאצ'ר","ftff"],
		["מהי תיאוקרטיה?","שלטון אנשי עסקים","שלטון אנשי דת","שלטון בעלי ממון","שלטון העם","ftff"],
		["באיזה ענף מוענק גביע סטנלי?","טניס","כדורגל","הוקי קרח","קריקט","fftf"],
		["כמה קלידים יש לפסנטר הסטנדרטי?","103","88","108","57","ftff"],
		["איזו להקה ביצעה את שיר הפתיחה של הסדרה חברים?","האבנים המתגלגלות","הרמונס","הרמברנדטס","האיגלז","fftf"],
		["מהי השפה הרשמית בגרינלנד?","אנגלית","גרמנית","גרינלנדית","בלטית","fftf"],
		["מהו הניקוד המקסימלי שאליו ניתן להגיע במשחק באולינג סטנדרטי?","100","150","300","185","fftf"],
		["מי חיבר את היצירה הקלאסית ארבע עונות?","מוצארט","וויואלדי","בטהובן","זובין מהטה","ftff"],
		["באיזו אשמה נשלח אל קאפונה לכלא?","התנהגות לא מוסרית במקום ציבורי","שוד מזוין	","רצח משולש","העלמת מס","ffft"],
		["מי היה הישראלי הראשון שזכה בפרס נובל?","בגין","עגנון","וייצמן","רבין","ftff"],
		["מי הבקיע את השער היחיד של ישראל במונדיאל?","ראובן עטר","מוטלה שפיגלר","אלון מזרחי","אלי אוחנה","ftff"],
		["לפי המיתולוגיה היוונית: מי האדם שעף קרוב מדי לשמש ומת?","אודיסאוס","איקרוס","הרקולס","אודין","ftff"],
		["איך אומרים בעברית עט?","קולמוס","נובע","חודן","עפרון","tfff"],
		["דונאלד טראמפ הוא נשיא מספר ___ של ארצות הברית?","40","45","50","78","ftff"],
		["מי כתב את הספר 'אליס בארץ הפלאות'?","מארק טווין","האחים גרים","לואיס קרול","אנטואן דה סנט-אכזופרי","fftf"],
		["כמה כוכבים יש בדגל ארצות הברית?","50","48","60","55","tfff"],
		["איזה כלי בשחמט יכול לזוז רק באלכסון?","מלך","צריח","רץ","פרש","fftf"],
		["איך נקראית מילה שאפשר לקרוא אותה גם מההתחלה לסוף וגם מהסוף להתחלה?","אונומטופיה","מילה סימטרית","פלינדרום","אקרוסטיכון","fftf"],
		["איזה פרי נקרא בעברית שעונית נאכלת?","מנגו","קיווי","פסיפלורה","קרמבולה","fftf"],
		["איזו בירה מיוצרת בהולנד?","טובורג","קורונה","הייניקן","גולדסטאר","fftf"],
		["היכן נולד רון חולדאי?","עכו","קיבוץ חולדה","מצרים","תל אביב","ftff"],
		["מהו סולם פנטטוני?","סולם מוסיקלי המורכב מחמישה צלילים באוקטבה","סקאלה מדורגת של יותר משלושה צבעים","סולם מודולרי ההופך למדרגות","סולם המודד עוצמת רעידות אדמה","tfff"],
		["מהי המדינה הקטנה ביותר בעולם?","ישראל","מונקו","סן מרינו","הוותיקן","ffft"],
		["קינוח השוקולד טראפלס, קיבל את שמו עקב?","הכפר הצרפתי טראפל, שם הומצא","לורד טראפלוס, בן האצולה שרצה שוקולד","דמיונם לפטריות הכמהין","טראפלס בצרפתית משמעותו, ממתק שוקולד","fftf"],
		["מה היה שמו האמיתי של מוחמד עלי?","קסיוס קליי","פאריד אל אטרש","לו אסינדור","מוחמד דלבי","tfff"],
		["מה שם המכשיר שבאמצעותו מודדים עוצמה של רעידות אדמה?","אנמומטר","סייסמוגרף","היגרומטר","קרסקוגרף","ftff"],
		["איזה סוג דם יש לתורם אוניברסלי?","AB+","B-","A+","O","ffft"],
		["מה מודדים בעזרת מהירות האור?","מסה","זמן","בהירות","מרחק","ffft"],
		["מהי התוצאה הנמוכה ביותר שניתן להשיג בבחינה הפסיכומטרית?","200","0","150","800","tfff"],
		["מהו המטבע הרשמי של מדינת אקוודור?","פסו קולומביאני","דראם ארמני","דולר אמריקאי","ריאל ברזילאי","fftf"],
		["ממה מכינים את המשקה האלכוהולי רום?","שזיפים","קנה סוכר","תפוח אדמה","שיבולת שועל","ftff"],
		["אנטמולוגיה היא מדע העוסק בחקר?","גוף האדם","חרקים","שכבות כדור הארץ","אבנים","ftff"],
		["גלילאו גליליי היה מדען איטלקי ש?","גילה את כוכב מאדים","בנה את המכונית הראשונה","גילה את כוח הכבידה","פיתח את הטלסקופ","ffft"],
		["מאיזה חומר עשוי החוד של העיפרון?","חודן","גרפיט","אקריל","אבנית","ftff"],
		["כיצד נקרא התהליך של הפיכת גז לנוזל?","עיבוי","המראה","אידוי","התמצקות","tfff"],
		["מהי החיה המהירה ביותר על הקרקע?","יגואר","חוטמן זריז","ברדלס","צ'יטה","ffft"],
		["מי המציא את הטלפון?","אלכסנדר גרהם בל","מקס מוריץ","לאוננרדו דה ויצ'י","אייזיק ניוטון","tfff"],
		["מה היא הציפור הגדולה ביותר?","נשר אמריקאי","קקדו","בת יענה","טווס אפריקאי","fftf"],
		["באיזו שנה פרצה מלחמת העולם השניה?","1939","1945","1837","1897","tfff"],
		["מה משמעות המילה אדווה?","פכפוך הגלים","מפתן הבית","מרפסת","קליפת הענב","tfff"],
		["מי יזם את תכסיס הסוס הטרויאני?","אלכסנדר מוקדון","אודיסאוס","המלך ארתור","אכילס","ftff"],
		["מה שם הקיבוץ הראשון בארץ?","דגניה","כנרת","משמורת","צהלים","tfff"],
		["אילו מהצורות הבאות מתארת הקווים הגאוגרפים של איטליה?","סיר","מגף","חולצה","כסא","ftff"],
		["מי מבין הבאים צומח על עץ?","בוטן","תפוח אדמה","קשיו","ג'ינג'ר","fftf"],
		["על שם מי נקרא קיבוץ יד מרדכי?","מרדכי היהודי","מרדכי קידר","מרדכי אנילביץ'","מרדכי כוכי","fftf"],
		["כמה בנות היו בלהקת הספייס גירלס?","4","5","2","7","ftff"],
		["מה היה מקצועו של הזמר אלביס פרסלי לפני שנהיה זמר?","קצב","ספר","נהג משאית","סנדלר","fftf"],
		["מה הוא החומר הטבעי הקשה ביותר בעולם?","טיטאניום","פחם","יהלום","נחושת","fftf"],
		["מה היא לדינו?","שפה","רהיט","זן של צמח","פרי טרופי","tfff"],
		["באיזה תחום מדובר על 3 חוקי ניוטון?","ביולוגיה","אסטרולוגיה","פיסיקה","פסיכולוגיה","fftf"],
		["מה מבין הבאים איננו המצאה ישראלית?","דיסק און קי","עגבניית שרי","טפטפות","ביטקוין","ffft"],
		["מה היה הכינוי של קלינט איסטווד בסרט - הטוב הרע והמכוער?","הטוב","המכוער","עיני מלאך","בלונדי","ffft"],
		["מי טבע את הביטוי - אני חושב משמע אני קיים?","אריסטו","קאנט","דקארט","שייקספיר","fftf"],
		["מה היה השיר הראשון שהושמע בגלגלצ?","אריק איינשטיין - סע לאט","רמי קליינשטיין - שרה ברדיו","יהודה פוליקר - התחלה חדשה","ריטה - תפתח חלון","tfff"],
		["מהי העיר הגבוהה ביותר בעולם?","לה פאז","באזל","לימה","בואנוס איירס","tfff"],
		["מי היה המורה של אריסטו?","סוקרטס","אפלטון","היפוקרטס","אלכסנדר הגדול","ftff"],
		["איך נקרא הפרס לקריקטורה עיתונאית?","פרס לונדון","פרס שמעון","פרס דוש","פרס דושבאג","fftf"],
		["מהו הר הגעש המסוכן בעולם?","סקורה ג'ימה, יפן","קוטפקסי, אקוודור","אטנה, איטליה","מרפי, אינדונזיה","tfff"],
		["מה זה פילטרום?","מכונה למיון זבל לפי סוגים","עגיל בגבה","מנסרה","השקע שבין השפה העליונה לאף","ffft"],
		["מה משמעות המילה טוזיג?","זכוכית","טוסיק ביידיש","פיקניק","מטבע","fftf"],
		["מה הסימון הכימי למים?","H2O","C2H","O2C","EmC2","tfff"],
		["מהי המדינה עם השטח הגדול בעולם?","רוסיה","ארה''ב","קנדה","סין","tfff"],
		["מהי משמעות המונח טאבולה ראסה?","תודעה פנימית","סלט פטרוזיליה","דף חלק","סלט בראש","fftf"],
		["מה הוא המוצר שהופיע בפרסומת הראשונה ששודרה בטלוויזיה ב-1953?","סבון","משחת שיניים","רכב של פורד","שעון","ffft"],
		["מה היא סיסמת הצופים?","לתת זה לקבל","עלה ונעלה","היה נכון","עוזרים לזולת","fftf"],
		["מהי אגורפוביה?","פחד ממקומות סגורים","פחד ממקומות נמוכים","פחד ממקומות גבוהים","פחד ממקומות פתוחים","ffft"],
		["מי לא היה חבר בלהקת החיפושיות?","רינגו סטאר","ג'ון לנון","פול מקארטני","אלטון ג'ון","ffft"],
		["כמה קיבות יש לפרה?","1","2","3","4","ffft"],
		["איזו חיה אינה כשרה?","ארבה","גמל","יחמור","צבי","ftff"],
		["שמה הקודם של תאילנד?","סיאם","ני האו","צ'אנג","סינגה","tfff"]
		];
		
		
		
		///מערך שחקנים////
		var classpic=[lib.pic1,lib.pic2,lib.pic3,lib.pic4,lib.pic5,lib.pic6,lib.pic7,lib.pic8,lib.pic9,lib.pic10,lib.pic11,lib.pic12,lib.pic13,lib.pic14,lib.pic15,lib.pic16,lib.pic17,lib.pic18];
		
		
		
		var qnum = 0;
		var timer;
		var totaltime=0;
		var score=0;
		var multiplier=1;
		var combo=0;
		var lastans="";
		var lastcorrect;
		var steps;
		var varis=0;
		var paused=0;
		
		instructions();
		
		
		
		function instructions()
		{
		var setter = new lib.sc1();
		stage.addChild(setter);
		setter.name="screen1";
			
		var screen1 = stage.getChildByName("screen1");
		
		screen1.start.addEventListener("click",function()
		{
		stage.removeChild(setter);
		setter = new lib.sc2();
		setter.y=100;
		stage.addChild(setter);
		setter.name="screen2";
		steps=Math.floor(Math.random()*6+2);
		
		var firstpic=Math.floor(Math.random()*classpic.length);
		var firstpicture=new classpic[firstpic];
		firstpicture.scaleX=0.45;
		firstpicture.scaleY=0.45;
		firstpicture.x=1090;
		firstpicture.y=-54;
		firstpicture.name="classpic";
		setter.addChild(firstpicture);
		classpic.splice(firstpic,1);
		setter.sidebar.sidetext.text="אני עוקף אותך ב"+" "+steps+" "+"תשובות נכונות";
			
		setter.wannastop.addEventListener("click",yousure);
		
		
		
		for(i=1;i<5;i++)
		{
		var disters = new lib.distand();
		disters.x=150;
		disters.y=(i*90);
		disters.name="dist"+i;
		setter.addChild(disters);
		}
			
		var timer = setInterval(addsec,1000);
		nextq();
		});
			
		screen1.wannastpex.addEventListener("click",function()
		{
		
		
		
		if(counter==0)
		{
		counter++;
		screen1.lol.text="יפה בדיוק ככה"
		}
		else if(counter==1)
		{
		counter++;
		screen1.lol.text="בסדר הבנו"
			
		}
		else if(counter==2)
		{
		counter++;
		screen1.lol.text="טוב זאת לא המטרה בוא נתחיל"
			
		}
		else if(counter==3)
		{
		counter++;
		screen1.lol.text="עוד מעט יגמרו המשפטים"
			
		}
		else if(counter==4)
		{
		counter++;
		screen1.lol.text="אבל עדיין לא"
			
		}
		else if(counter==5)
		{
		counter++;
		screen1.lol.text="יש עוד טיפה"
			
		}
		else if(counter==6)
		{
		counter++;
		screen1.lol.text="האמת שיש אינסוף כי יש פה טריק"
			
		}
		else if(counter==7)
		{
		counter++;
		screen1.lol.text="הטריק לא מתוחכם אבל";
			
		}
		else if(counter>100&&counter<110)
		{
		counter++;
		screen1.lol.text="ממש משעמם לכם אה?"	
			
		}
		else if(counter>7)
		{
		counter++;
		screen1.lol.text="זה טריק מספר "+(counter-8).toString();
		}
		
		
		
			
		});
			
		}
		
		
		function addsec()
		{
		
		totaltime++;
			
		}
		
		function nextq()
		{
		var screen2=stage.getChildByName("screen2");
		
		screen2.geza.text=qb[qnum][0];
		
		
		for(i=1;i<5;i++)
		{
		screen2.getChildByName("dist"+i).disty.distext.text=qb[qnum][i];
		screen2.getChildByName("dist"+i).addEventListener("click",checkans);
		if(qb[qnum][5][i-1]=="t")
		{
		lastans=screen2.getChildByName("dist"+i).name;
		screen2.getChildByName("dist"+i).name="correct";
		}
			
		}
		
			
			
		}
		
		
		
		function checkans(e)
		{
		if(paused==1)
		{
			
		}
		else
		{
		var screen2=stage.getChildByName("screen2");	
			
		if(e.currentTarget.name=="correct")
		{
		
		e.currentTarget.disty.gotoAndStop(1);
		score++;
		lastcorrect=qnum;
		var points = new lib.scrtwin();
		points.x=905;
		points.y=100;
		stage.addChild(points);
		var thisscore=score+(combo*multiplier);
		points.scoreup.scoring.text=thisscore.toString();
		createjs.Sound.play("correct",0,0,0,0,0.2);
		combo++;
		multiplier++;
		onestepahead();
		setTimeout(function(){
			stage.removeChild(points);
			screen2.scoreboard.text=(parseInt(screen2.scoreboard.text)+thisscore).toString();
			
			},600);
		}
		else
		{
		e.currentTarget.disty.gotoAndStop(2);
		combo=0;
		lastcorrect=0;
		createjs.Sound.play("incorrect",0,0,0,0,0.6);
		multiplier--;
		if(multiplier<0)
		{
		multiplier=0;	
		}
		}
		screen2.getChildByName("correct").name=lastans;	
		for(i=1;i<5;i++)
		{
		screen2.getChildByName("dist"+i).removeEventListener("click",checkans);
		}	
		
		setTimeout(function()
		{
		checkachieve();
		},620);
		
		qnum++;
		setTimeout(function()
		{
		if(qnum==qb.length)
		{
		qnum=0;	
		}
		e.currentTarget.disty.gotoAndStop(0);
		nextq();
		},550);	
		}
		}
		
		function yousure()
		{
		paused=1;
		var setter = new lib.yousure();
		setter.x=230;
		setter.y=40;
		
		stage.addChild(setter);
		var picclone=stage.getChildByName("screen2").getChildByName("classpic").clone();
		if(varis!=1)
		{
		setter.giveuptext.text="נותרו לכם עוד"+" "+steps+" "+"שאלות כדי לעקוף את";
		picclone.x=301;
		picclone.y=236;
		}
		else
		{
		setter.giveuptext.text="אתם מקום ראשון אבל יש כמה משימות סודיות שלא השלמתם";
		picclone.x=393;
		picclone.y=342;
		}
		picclone.scaleX=1;
		picclone.scaleY=1;
		
		setter.addChild(picclone);
		setter.name="quityn";
		setter.noidont.addEventListener("click",quitter);
		setter.yesiwant.addEventListener("click",function()
		{
		paused=0;
		stage.removeChild(setter);
		setter.noidont.removeEventListener("click",quitter);
		});
		}
		
		
		
		function quitter()
		{
		clearInterval(timer);
		stage.removeChild(stage.getChildByName("quityn"));
		stage.removeChild(stage.getChildByName("screen2"));
		home.ach1.visible=false;
		home.ach2.visible=false;
		home.ach3.visible=false;
		home.ach4.visible=false;
		home.ach5.visible=false;
		home.ach6.visible=false;
		home.ach7.visible=false;
		var setter = new lib.sc3();
		setter.x=650;
		setter.y=342;
		stage.addChild(setter);
		setter.name="screen3";
		
		var minutes = Math.floor(totaltime / 60).toString();
		var seconds = (totaltime - minutes * 60).toString();
			
		if(minutes<10)
		{
		minutes="o"+minutes;
		}
		if(seconds<10)
		{
		seconds="o"+seconds;
		}
		
		minutes=minutes.split("");
		seconds=seconds.split("");
			
		for(i=0;i<2;i++)
		{
		if(minutes[i]==1)
		{
		minutes[i]="i";
		}
		else if(minutes[i]==0)
		{
		minutes[i]="o";
		}
		else if(minutes[i]==3)
		{
		minutes[i]="e";
		}
		else if(minutes[i]==4)
		{
		minutes[i]="a";
		}
		else if(minutes[i]==5)
		{
		minutes[i]="s";
		}
		else if(minutes[i]==7)
		{
		minutes[i]="l";
		}
			
		}
		
		for(i=0;i<2;i++)
		{
		if(seconds[i]==1)
		{
		seconds[i]="i";
		}
		else if(seconds[i]==0)
		{
		seconds[i]="o";
		}
		else if(seconds[i]==3)
		{
		seconds[i]="e";
		}
		else if(seconds[i]==4)
		{
		seconds[i]="a";
		}
		else if(seconds[i]==7)
		{
		seconds[i]="l";
		}
		else if(seconds[i]==5)
		{
		seconds[i]="s";
		}	
		}
			
		
			
			
			
		var timecalc=minutes[0]+minutes[1]+seconds[0]+seconds[1];	
		
		
		setTimeout(function(){
		$("#vcodetext").text(timecalc);
		},200);
		setter.linkout.addEventListener("click",function()
		{
		window.open("https://docs.google.com/forms/d/e/1FAIpQLSdgJuIegvHEEooXCERzfpGXXzE-1xxc1hObJmZqrfjzehD2YA/viewform", "_blank");
		});
			
			
			
		}
		
		
		///////////////Achievement Variables////////////////
		var recentlyachieved=0;
		
		
		var biologist = 0;
		var patriotism =0;
		
		
		///////////////////////////////////////////////////
		
		
		
		function checkachieve()
		{
		if(combo==3&&achievementlist[0][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(0);
		achievementlist[0][0]="done";
		recentlyachieved=1;	
		stage.getChildByName("screen2").sidebar.achiv1.gotoAndStop(1);
		home.ach1.visible=true;
		},1550);
		}
		else
		{
		playachieve(0);
		achievementlist[0][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv1.gotoAndStop(1);
		home.ach1.visible=true;
		}
		}
		if(combo>9&&achievementlist[6][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(6);
		achievementlist[6][0]="done";
		recentlyachieved=1;	
		stage.getChildByName("screen2").sidebar.achiv5.gotoAndStop(1);
		home.ach4.visible=true;
		},1550);
		}
		else
		{
		playachieve(6);
		achievementlist[6][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv5.gotoAndStop(1);
		home.ach4.visible=true;
		}
		}
		if(lastcorrect==8||lastcorrect==9)
		{
		biologist++;	
		}
		if(lastcorrect==17||lastcorrect==59)
		{
		patriotism++;	
		}
		if(biologist==2&&achievementlist[1][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(1);
		achievementlist[1][0]="done";
		recentlyachieved=1;	
		stage.getChildByName("screen2").sidebar.achiv2.gotoAndStop(1);
		home.ach2.visible=true;
		},1550);
		}
		else
		{
		playachieve(1);
		achievementlist[1][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv2.gotoAndStop(1);
		home.ach2.visible=true;
		}
		}
		if(patriotism==2&&achievementlist[6][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(6);
		achievementlist[6][0]="done";
		recentlyachieved=1;	
		},1550);
		}
		else
		{
		playachieve(6);
		achievementlist[6][0]="done";
		recentlyachieved=1;
		
		}
		}
		if(score==10&&achievementlist[2][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(2);
		achievementlist[2][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv3.gotoAndStop(1);
		home.ach3.visible=true;
		},1550);
		}
		else
		{
		playachieve(2);
		achievementlist[2][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv3.gotoAndStop(1);
		home.ach3.visible=true;
		}
		
		}
		if(lastcorrect==10&&achievementlist[3][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(3);
		achievementlist[3][0]="done";
		recentlyachieved=1;
		home.ach5.visible=true;
		},1550);
		}
		else
		{
		playachieve(3);
		achievementlist[3][0]="done";
		recentlyachieved=1;
		home.ach5.visible=true;
		}
		
		}
		if(parseInt(stage.getChildByName("screen2").scoreboard.text)>=1000&&achievementlist[4][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(4);
		achievementlist[4][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv4.gotoAndStop(1);
		home.ach6.visible=true;
		},1550);
		}
		else
		{
		playachieve(4);
		achievementlist[4][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv4.gotoAndStop(1);
		home.ach6.visible=true;
		}
		
		}
		
		if(parseInt(stage.getChildByName("screen2").scoreboard.text)>=10000&&achievementlist[5][0]!="done")
		{
		if(recentlyachieved==1)
		{
		setTimeout(function()
		{
		playachieve(5);
		achievementlist[5][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv6.gotoAndStop(1);
		home.ach7.visible=true;
		},1550);
		}
		else
		{
		playachieve(5);
		achievementlist[5][0]="done";
		recentlyachieved=1;
		stage.getChildByName("screen2").sidebar.achiv6.gotoAndStop(1);
		home.ach7.visible=true;
		}
		
		}
		
			
		}
			
		function playachieve(number)
		{
		var giveachieve=new lib.achieve();
		giveachieve.x=200.45;
		giveachieve.y=721.75;
		giveachieve.achieve.achievetext.text=achievementlist[number][1];
		var whichachieve=new achievements[number];
		whichachieve.x=593;
		whichachieve.y=15;
		giveachieve.achieve.addChild(whichachieve);
		stage.addChild(giveachieve);
		createjs.Sound.play("unlocked",0,0,0,0,0.3);
		setTimeout(function()
		{
		stage.removeChild(giveachieve);	
		recentlyachieved=0;
		},3000);
		}
		
		
		var closesteps=0;
		
		
		function onestepahead()
		{
		if(closesteps==1)
		{
			
		}
		else
		{
		var screen2 = stage.getChildByName("screen2");
		
		steps--;
		screen2.sidebar.sidetext.text="אני עוקף אותך ב"+" "+steps+" "+"תשובות נכונות";
		if(steps==0)
		{
		if(varis==1)
		{
		screen2.removeChild(screen2.getChildByName("classpic"));
		var firstpicture=new lib.numbaone();
		firstpicture.x=1111;
		firstpicture.y=-17;
		firstpicture.name="classpic";
		screen2.addChild(firstpicture);
		
		screen2.sidebar.sidetext.text="אתה הכי טוב בינתיים";
		closesteps=1;
		}
		else
		{
		screen2.removeChild(screen2.getChildByName("classpic"));
		steps=Math.floor(Math.random()*6+2);
		var randomizer = Math.floor(Math.random()*classpic.length);
		var firstpicture=new classpic[randomizer];
		firstpicture.scaleX=0.45;
		firstpicture.scaleY=0.45;
		firstpicture.x=1090;
		firstpicture.y=-54;
		firstpicture.name="classpic";
		screen2.addChild(firstpicture);
		classpic.splice(randomizer,1);
		
		screen2.sidebar.sidetext.text="אני עוקף אותך ב"+" "+steps+" "+"תשובות נכונות";	
		}
		}
		else if(classpic.length==0)
		{
		varis=1;
		}
		}	
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ach3 = new lib.scorer();
	this.ach3.parent = this;
	this.ach3.setTransform(360.2,650.6,1,1,0,0,0,57.3,37.1);
	this.ach3.visible = false;

	this.ach5 = new lib.cards();
	this.ach5.parent = this;
	this.ach5.setTransform(637.2,648.5,1,1,0,0,0,61.8,42.1);
	this.ach5.visible = false;

	this.ach7 = new lib.megalotus();
	this.ach7.parent = this;
	this.ach7.setTransform(895.2,657,1,1,0,0,0,38.4,31.7);
	this.ach7.visible = false;

	this.ach6 = new lib.lotus();
	this.ach6.parent = this;
	this.ach6.setTransform(768.2,664.3,1,1,0,0,0,38.4,36.4);
	this.ach6.visible = false;

	this.ach4 = new lib.superhot();
	this.ach4.parent = this;
	this.ach4.setTransform(489.3,653.8,0.778,0.778,0,0,0,38.3,45);
	this.ach4.visible = false;

	this.ach2 = new lib.biolog();
	this.ach2.parent = this;
	this.ach2.setTransform(256.2,649.3,0.831,0.831,0,0,0,49.6,47.3);
	this.ach2.visible = false;

	this.ach1 = new lib.hot();
	this.ach1.parent = this;
	this.ach1.setTransform(142.2,652.3,0.878,0.878,0,0,0,40.9,43.9);
	this.ach1.visible = false;

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/csstrivia.css'});

	this.instance.setTransform(1448.4,406.2,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.ach1},{t:this.ach2},{t:this.ach4},{t:this.ach6},{t:this.ach7},{t:this.ach5},{t:this.ach3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(746.3,754.7,1392.7,296.1);
// library properties:
lib.properties = {
	id: '774055377D70C14EAEADEF55EB8672B9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/triviatest_atlas_.png", id:"triviatest_atlas_"},
		{src:"sounds/unlocked.mp3", id:"unlocked"},
		{src:"sounds/correct.mp3", id:"correct"},
		{src:"sounds/incorrect.mp3", id:"incorrect"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/label.js", id:"an.Label"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['774055377D70C14EAEADEF55EB8672B9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;