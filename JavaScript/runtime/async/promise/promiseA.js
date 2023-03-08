const PENDING = 'PENDING';
const FULFILLED = 'FULLILLED';
const REJECTED = 'REJECTED';


function PromiseA(fn) {

  const _that = this;
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;

  this.onFulfilledCallback = [];
  this.onRejectedCallback = [];

  function resolve(val) {
    if (_that.status === PENDING) {
      _that.status = FULFILLED;
      _that.value = val;
      _that.onFulfilledCallback.forEach(cb => cb(_that.val));
    }
  }

  function reject(err) {
    if (_that.status === PENDING) {
      _that.status = REJECTED;
      _that.reason = err;
      _that.onRejectedCallback.forEach(cb => cb(_that.reason));
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error);
  }
}

// thenable 

PromiseA.prototype.then = function(onFulfilled, onRejected) {

  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val;
  onRejected = typeof onRejected === 'function' ? onRejected : (err) => err;

  let p2;

  const _that = this;

  function resolvePromise(p2, x, resolve, reject) {
    if (p2 === x) {
      reject(new TypeError('The promise and return value are same'))
    }

    if (x instanceof PromiseA) { 
      x.then(() => {
        resolvePromise(p2, x, resolve, reject)
      }, reject)
    }
    else if (typeof x === 'function' || typeof x === 'object') {

      if (x === null) {
        return resolve(x)
      }

      try {
        let then = x.then;
      } catch (error) {
        reject(error)
      }

      if (typeof then === 'function') { 
        let called = false;
        try {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              resolvePromise(p2, y, resolve, reject)
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r)
            }
          )
        } catch (error) {
          if (called) return;
          reject(error)
        }
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }

  if (this.status === FULFILLED) {
    p2 = new PromiseA((resolve, reject) => {
      setTimeout(() => {
        try {
          var x = onFulfilled(_that.value);
          resolvePromise(p2, x, resolve, reject);
          // resolve(_that.value);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
    return p2;
  }

  if (this.status === REJECTED) { 
    p2 = new Promise((resolve, reject) => { 
      setTimeout(() => {
        try {
          onRejected(_that.reason);
          resolve()
        } catch (error) {
          reject(error);
        }
      }, 0);
    })
    return p2;
  }

  if (this.status === PENDING) {
    p2 = new PromiseA((resolve, reject) => {
      _that.onFulfilledCallback.push(() => {
        setTimeout(() => {
          try {
            onFulfilled(_that.value);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      _that.onRejectedCallback.push(() => {
        setTimeout(() => {
          try {
            onRejected(_that.reason);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    });
  }
};

PromiseA.deferred = function () {
  let result = {};
  result.promise = new PromiseA((resolve, reject) => { 
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
}


module.exports = PromiseA;