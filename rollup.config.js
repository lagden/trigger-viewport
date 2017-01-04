'use strict'

import buble from 'rollup-plugin-buble'

export default {
	entry: 'index.js',
	format: 'umd',
	dest: 'dist/index.js',
	moduleName: 'TriggerViewport',
	plugins: [
		buble()
	],
	sourceMap: true
}
