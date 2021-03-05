const consumeInputData = (e) => {
  console.log("API call with input values", e.target.value);
};

const debouncing = (fn, d) => {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const keyUpHandler = debouncing(consumeInputData, 300);
