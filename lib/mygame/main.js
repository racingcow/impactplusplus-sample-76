ig.module( 
	'mygame.main'
)
.requires(
	'plusplus.debug.debug',
	'mygame.ui.menu',
	'mygame.ui.highlight'
)
.defines(function() {
	"use strict";

	ig.MainGame = ig.GameExtended.extend({

		menu: null,
		highlight: null,

		init: function() {
			this.parent();
			this.loadLevel(ig.global.pftest);
		},
		showmenu: function(useLinkAlign) {
			if (!this.menu) {
				this.dimmer.message = null; //no 'paused' text
				this.menu = this.spawnEntity(ig.Menu, 0, 0, {
					linkedTo: this.dimmer
				});
			}
			if (!this.highlight) {
				this.highlight = this.spawnEntity(ig.Highlight, 0, 0, {
					linkedTo: this.menu,
					marginAsPct: false,
					marginScaleless: false,
					margin: {x: -189, y: -158},

					//seems to only work if linkAlign is non-zero vector (default)
					linkAlign: useLinkAlign ? {x: 1, y: 1} : {x: 0, y: 0}
				});
			}
		},
		hidemenu: function() {
			if (this.highlight) {
				this.highlight.fadeToDeath();
				this.highlight = undefined;
			}
			if (this.menu) {
				this.menu.fadeToDeath();
				this.menu = undefined;
			}
		},
		inputStart: function() {
			this.parent();
			ig.input.bind(ig.KEY.ESC,	'pauseWithoutLinkAlign');
			ig.input.bind(ig.KEY.TAB,	'pauseWithLinkAlign');
		},
		inputEnd: function() {
			this.input.unbindAll();
		},
		update: function() {
			this.parent();

			if (ig.input.pressed('pauseWithoutLinkAlign')) this.pauseLinkAlign(false);
			if (ig.input.pressed('pauseWithLinkAlign')) this.pauseLinkAlign(true);
		},
		pauseLinkAlign: function(withLinkAlign) {
			if (ig.game.paused) {
				ig.game.unpause();
				this.hidemenu();
			} 
			else {
				ig.game.pause();
				this.showmenu(withLinkAlign);
			}
		}
	});

	ig.main(
		'#canvas',
		ig.MainGame,
		0,
		640,
		480,
		1
	);
});