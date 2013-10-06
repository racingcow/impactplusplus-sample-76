ig.module(
		'mygame.ui.highlight'
	)
	.requires(
		'plusplus.ui.ui-element'
	)
	.defines(function () {
		'use strict';

		var _c = ig.CONFIG;

		ig.Highlight = ig.global.Highlight = ig.UIElement.extend({
			layerName: 'ui',
			size: {x: 24, y: 24},
			animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'menu-indicator.png', 24, 24),
			animSettings: {
				idle: {
					frameTime: 1,
					sequence: [1]
				}
			}
		});
	});