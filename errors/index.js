const CustomAPIError = require('./custom-error');
const BadRequest = require('./bad-request');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found');

module.exports = {
  CustomAPIError,
  BadRequest,
  UnauthenticatedError,
  NotFoundError,
};
