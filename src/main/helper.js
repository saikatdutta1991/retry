const { promisify } = require("util");

/**
 * Checks asynchronous function
 * @param {Promise|AsyncFunction|function|any} operation
 * @return {boolean}
 */
exports.isAsyncFunction = operation => {
  const AsyncFunction = (async () => {}).constructor;
  return operation instanceof AsyncFunction;
};

/**
 * Checks Promise Object
 * @param {Promise|AsyncFunction|function|any} operation
 * @return {boolean}
 */
exports.isPromise = operation => {
  return operation instanceof Promise;
};

/**
 * Checks if function
 * @param {Promise|AsyncFunction|function|any} operation
 * @return {boolean}
 */
exports.isFunction = operation => {
  return typeof operation === "function";
};

/**
 * Converts to Promse Object
 * @param {Promise|AsyncFunction|function} operation
 * @return {Promise}
 * @throws {Error} on fails to create promise
 */
exports.convert = operation => {
  if (isPromise(operation)) {
    return operation;
  } else if (isAsyncFunction(operation)) {
    return operation();
  } else if (isFunction(operation)) {
    return promisify(operation);
  } else {
    throw new Error("Unsupported parameter passed");
  }
};

/** async timeout */
exports.timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
