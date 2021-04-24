
export default function (fn, duration = 100) {
    // 函数防抖  延迟执行
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, 100)
        // clearTimeout(timer); //一直清理  
    }
}

