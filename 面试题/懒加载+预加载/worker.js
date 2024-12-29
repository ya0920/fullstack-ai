self.onmessage = function(e) {
  // console.log(e.data);
  // 将数组中的地址资源加载出来
  let arr = e.data;
  for (let i = 0; i < arr.length; i++) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", arr[i], true);
    xhr.responseType = 'blob'  // 文件类型
    xhr.send();
    xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.response);
        self.postMessage(xhr.response);
      }

    }
  }
}