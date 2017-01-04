'use strict'

const jsdom = require('jsdom')

global.document = jsdom.jsdom(`
<div style="width: 100%;height: 500px; overflow: hidden"></div>
<div class='man'></div>
<div style="width: 100%;height: 500px; overflow: hidden"></div>
`)
global.window = global.document.defaultView
global.HTMLElement = global.window.HTMLElement
global.HTMLElement.prototype.dataset = {}

;(function () {
	let lastTime = 0
	function raf(callback) {
		const currTime = new Date().getTime()
		const timeToCall = Math.max(0, 16 - (currTime - lastTime))
		const id = global.window.setTimeout(() => {
			callback(currTime + timeToCall)
		}, timeToCall)
		lastTime = currTime + timeToCall
		return id
	}

	function caf(id) {
		clearTimeout(id)
	}

	if (!global.window.requestAnimationFrame) {
		global.window.requestAnimationFrame = raf
	}

	if (!global.window.cancelAnimationFrame) {
		global.window.cancelAnimationFrame = caf
	}
})()
