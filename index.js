'use strict';

/**
 * Create a markdown-formatted reference link from the given values.
 *
 * ```js
 * mdreference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
 * //=> [template]: https://github/jonschlinkert/template "Make stuff!"
 * ```
 *
 * @name reference
 * @param  {String} `id`
 * @param  {String} `url`
 * @param  {String} `title`
 * @api public
 */

module.exports = function reference(id, url, title) {
  if (typeof id !== 'string') {
    throw new TypeError('markdown-reference expects id to be a string.');
  }
  if (typeof url !== 'string') {
    throw new TypeError('markdown-reference expects url to be a string.');
  }

  title = title ? ' "' + title + '"' : '';
  return '[' + id + ']: ' + url + title;
};
