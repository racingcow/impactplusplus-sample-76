ig.module(
		'mygame.ui.menu'
	)
	.requires(
		'plusplus.ui.ui-element'
	)
	.defines(function () {
		'use strict';

		var _c = ig.CONFIG;

		ig.Menu = ig.global.Menu = ig.UIElement.extend({
			layerName: 'ui',
			size: {x: 192, y: 164},
			animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'menu-consumables.png', 192, 164),
			animSettings: {
				idle: {
					frameTime: 1,
					sequence: [0]
				}
			}
		});

	});