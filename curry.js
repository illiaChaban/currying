const add = (a,b,c,d) => a + b + c + d;

const curry = (fn, ...args) => {
  if (args.length < fn.length) {
    return (...more) => curry(fn, ...args, ...more);
  }
  // invoke the function if all expected parameters were specified
  return fn(...args);
}

const fpAdd = curry(add)
// fpAdd(1,2)(3)(4)  --> 10
// fpAdd(1,2,3)(4)  --> 10
// fpAdd(1)(2)(3)(4)  --> 10
