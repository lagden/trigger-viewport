'use strict'

import test from 'ava'
import TriggerViewport from '../index'

// jsdom doesn't support scroll events :(
test.cb('validation', t => {
	t.plan(3)
	const d = document.querySelectorAll('.man')
	let p = new TriggerViewport(d, {
		trigger: 0,
		cb(el, allFired) {
			el.classList.add('man--jump')
			if (allFired) {
				p = null
			}
			t.true(allFired)
			t.end()
		}
	})
	t.true(Array.isArray(p.els))
	t.is(p.opts.trigger, 0)
	p.handleEvent({type: 'scroll'})
})
