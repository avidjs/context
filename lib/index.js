/**
 * @file lib/index.js
 */
'use strict';


const request  = require('@avidjs/request');
const response = require('@avidjs/response');


/**
 * An Avid handler function.
 * @typedef {Function} Handler
 */


/**
 * @param  {Handler}         app
 * @param  {IncomingMessage} req
 * @param  {ServerResponse}  res
 * @return {Context}
 * @see {@link https://nodejs.org/api/http.html#http_class_http_incomingmessage}
 * @see {@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
module.exports = function context(app, req, res) {
  return { app, req: request(req), res: response(res) };
};
