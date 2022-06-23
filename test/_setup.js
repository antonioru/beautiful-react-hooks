const chai = require('chai')
const sinon = require('sinon')
const { createMemoryHistory } = require('history')

global.history = createMemoryHistory()

// shortcuts:
global.expect = chai.expect
global.should = chai.should()
global.sinon = sinon

// because of a bug in one of the project dependency `wait-for-expect`, the following line must be placed here.
// to know more: https://github.com/testing-library/dom-testing-library/issues/194
window.Date = Date
