const add = (a,b,c,d) => a + b + c + d;

const curry = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...args2) => {
    const curried = fn.bind(null, ...args);
    return curry(curried, ...args2);
  };
}

const fpAdd = curry(add)
// fpAdd(1,2)(3)(4)  --> 10
