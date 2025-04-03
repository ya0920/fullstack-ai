function nextTick(cb) {
    const observer = new MutationObserver(cb);
    observer.observe(document, { 
        subtree: true,
        childList: true,
    });
}