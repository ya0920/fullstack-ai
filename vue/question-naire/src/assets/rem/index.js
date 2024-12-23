(function(doc) {
  let docEl = doc.documentElement;  // 获取html元素
  // 文档加载完毕
  doc.addEventListener('DOMContentLoaded', () => {
    // 设置根元素的font-size
    let width = docEl.clientWidth;
    docEl.style.fontSize = width / 375 * 10 + 'px';
  })

})(document)