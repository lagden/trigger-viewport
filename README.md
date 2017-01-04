# TriggerViewport
[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]
[![XO code style][xo-img]][xo]

[npm-img]:       https://img.shields.io/npm/v/lagden-trigger-viewport.svg
[npm]:           https://www.npmjs.com/package/lagden-trigger-viewport
[ci-img]:        https://travis-ci.org/lagden/trigger-viewport.svg
[ci]:            https://travis-ci.org/lagden/trigger-viewport
[coveralls-img]: https://coveralls.io/repos/github/lagden/trigger-viewport/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/trigger-viewport?branch=master
[dep-img]:       https://david-dm.org/lagden/trigger-viewport.svg
[dep]:           https://david-dm.org/lagden/trigger-viewport
[devDep-img]:    https://david-dm.org/lagden/trigger-viewport/dev-status.svg
[devDep]:        https://david-dm.org/lagden/trigger-viewport#info=devDependencies
[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Detects when an element reaches the value inside the viewport


## Install

```
$ npm i -S lagden-trigger-viewport
```


## Usage

```js
const d = document.querySelectorAll('.man')
let p = new TriggerViewport(d, {
	trigger: 75,
	cb(el, allFired) {
		el.classList.add('man--jump')
		if (allFired) {
			p = null
		}
	}
})
```


## API

### TriggerViewport

#### constructor(els, options = {})

Name        | Type      | Required | Default                         | Description
----------- | --------- | -------- | ------------------------------- | ------------
els         | array     | yes      |                                 | Array of HTML Elements
options     | object    | no       | [see below](#options)           | Some options

##### options

Name        | Type      | Required | Default                         | Description
----------- | --------- | -------- | ------------------------------- | ------------
trigger     | int       | no       | 50                              | 0 is top and 100 is bottom (percentage)
cb          | function  | no       | null                            | Callback


## License

MIT © [Thiago Lagden](http://lagden.in)
