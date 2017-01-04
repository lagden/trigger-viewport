'use strict'

function extend(a, b) {
	Object.keys(b).forEach(prop => {
		a[prop] = b[prop]
	})
	return a
}

if ('assign' in Object === false) {
	Object.assign = extend
}

class TriggerViewport {
	constructor(els, options = {}) {
		this.els = Array && Array.from ? Array.from(els) : Array.prototype.slice.call(els)
		this.allFired = false
		this.win = {
			width: window.innerWidth,
			height: window.innerHeight
		}
		this.cc = 0
		this.ticking = false
		this.opts = Object.assign({
			trigger: 50,
			cb: null
		}, options)

		this.tick()
		window.addEventListener('scroll', this)
	}

	_calc(el, trigger) {
		const bounds = el.getBoundingClientRect()
		const percent = Math.ceil((bounds.top * 100) / this.win.height)
		return percent <= trigger
	}

	update() {
		for (let i = 0, len = this.els.length; i < len; i++) {
			const el = this.els[i]
			if (el.dataset.ignore === undefined) {
				if (this._calc(el, this.opts.trigger)) {
					el.dataset.ignore = true
					this.cc++
					if (len === this.cc) {
						this.allFired = true
					}
					if (typeof this.opts.cb === 'function') {
						this.opts.cb(el, this.allFired)
					}
				}
			}
		}
		if (this.allFired) {
			window.removeEventListener('scroll', this)
		}
		this.ticking = false
	}

	tick() {
		if (this.ticking === false) {
			window.requestAnimationFrame(this.update.bind(this))
			this.ticking = true
		}
	}

	onScroll() {
		this.win = {
			width: window.innerWidth,
			height: window.innerHeight
		}
		this.tick()
	}

	handleEvent(event) {
		const handler = `on${event.type.charAt(0).toUpperCase()}${event.type.slice(1)}`
		if (this[handler]) {
			this[handler](event)
		}
	}
}

export default TriggerViewport
