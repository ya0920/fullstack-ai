function nextTick(cb) {
    return new Promise((resolve) => {

        function fn() {
            return () => {
                cb()
                resolve()

            }
        }
        // 当 dom 结构渲染结束后，执行回调
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(fn())
            observer.observe(document.body, {
                childList: true,
                subtree: true
            })
        }
        else {
            setTimeout(fn(), 0)
        }
    });

}