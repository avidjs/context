/**
 * @file lib/index.js
 */
'use strict';


const clone    = require('lodash.clonedeep');
const request  = require('@avidjs/request');
const response = require('@avidjs/response');


/**
 * An Avid request object.
 * @typedef {Object} Request
 */

/**
 * An Avid response object.
 * @typedef {Object} Response
 */


/**
 * An Avid context object.
 * @typedef {Object} Context
 * @property {Request}  request
 * @property {Response} response
 */


/**
 * Creates an Avid context object from HTTP request and response objects to
 * pass through middleware stacks.
 * @param  {Object}          ctx
 * @param  {IncomingMessage} req
 * @param  {ServerResponse}  res
 * @return {Context}
 * @see {@link https://nodejs.org/api/http.html#http_class_http_incomingmessage}
 * @see {@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
module.exports = function context(ctx, req, res) {
  return Object.assign(clone(ctx), {
    request:  request(req, ctx.settings),
    response: response(res, ctx.settings)
  });
};
