export const debounce = function (fn, delay = 300) {
  let timer = null;
  return function (event) {
    // https://reactjs.org/docs/events.html#event-pooling
    // https://zh-hans.reactjs.org/docs/events.html#event-pooling
    event.persist();
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

export const throttle = function (fn, delay = 300) {
  let canRun = true;
  return function (event) {
    if (!canRun) return;
    canRun = false;
    event.persist();
    const context = this;
    const args = arguments;
    setTimeout(() => {
      fn.apply(context, args);
      canRun = true;
    }, delay);
  };
};
