export const debounce = (fn, delay = 100) => {
    let timer;

    return function () {
        const arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(this, arg);
        }, delay);
    };
};

export const throttle = (fn, delay = 100) => {
    let time = 0;
    return function () {
        const arg = arguments;
        const nowTime = new Date().getTime();
        if (nowTime - time > delay) {
            time = nowTime;
            fn.apply(this, arg);
        }
    };
};
