export const debounce = (fn, delay = 100) => {
    let timer;

    return function () {
        const arg = arguments
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(this, arg);
        }, delay);
    };
};
