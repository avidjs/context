/**
 * @file lib/index.js
 */
'use strict';


const cloneDeep     = require('lodash.clonedeep');
const isPlainObject = require('is-plain-object');
const request       = require('@avidjs/request');
const response      = require('@avidjs/response');


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
  const contextObj = {};

  // If the context object's property is a plain object, perform a deep clone
  // to prevent overriding values defined at the application level. If the
  // property is a primitive value or class instance, assign directly to avoid
  // the overhead of deep cloning more complex objects.
  Object.keys(ctx).forEach((property) => {
    if (isPlainObject(ctx[property])) {
      contextObj[property] = cloneDeep(ctx[property]);
    } else {
      contextObj[property] = ctx[property];
    }
  });

  return Object.assign(contextObj, {
    request:  request(req, ctx.settings),
    response: response(res, ctx.settings)
  });
};
