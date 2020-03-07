/** import helper functions */
const { timeout, isPromise } = require("./helper");

/**
 * Retry failed operations
 *
 * It takes any operation and failure retries count,
 * Then converts the operation into promise
 * Then tries to execute the operation and returns result
 * If fails, tries to execute operation number of times param,
 * at end throws the error.
 *
 * @param {Promise} promise
 * @param {number} times execute the operation this many times on failure
 * @param {number} delay It delays retry call in miliseconds
 * @return {Promise}
 * @throws {Error} on fails to create promise
 */
const retry = async (promise, times, delay = 1) => {
  if (!isPromise(promise)) {
    throw new Error("Operation must be promise");
  }
  
  try {
    return await promise; // return promise resove on success
  } catch (err) {
    if (times === 1) throw err; // throw error to caller if n tries fails
    await timeout(delay);
    return await retry(promise, times - 1, delay); // retry again if tries count not 1
  }
};

module.exports = retry;
