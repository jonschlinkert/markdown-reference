/*!
 * markdown-reference <https://github.com/jonschlinkert/markdown-reference>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var mdreference = require('./');

describe('mdreference', function () {
  it('should:', function () {
    mdreference('visit assemble', 'https://github.com/assemble/assemble', 'assemble documentation').should.equal('[visit assemble]: https://github.com/assemble/assemble "assemble documentation"');
  });

  it('should throw an error on bad args:', function () {
    (function () {
      mdreference();
    }).should.throw('markdown-reference expects id to be a string.');

    (function () {
      mdreference('foo');
    }).should.throw('markdown-reference expects url to be a string.');
  });
});
