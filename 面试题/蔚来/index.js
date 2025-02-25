let heap = [10, 8, 7, 5, 3, 2, 9]

class MaxHeap {
  constructor() {
    this.heap = []
  }

  insert(value) { // 植入数据
    this.heap.push(value)
    // 元素上浮
    this.swim(this.heap.length - 1) // 从插入的地方开始上浮
  }

  swim(index) {
    while(index > 0) {
      const parentIndex = Math.floor((index - 1) / 2) // 找到父节点
      if (this.heap[parentIndex] >= this.heap[index]) {
        break  // 不用上浮
      }
      // 交换
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      index = parentIndex
    }
  }


}

const maxHeap = new MaxHeap()
maxHeap.heap = [10, 8, 7, 5, 3, 2]
maxHeap.insert(9)
console.log(maxHeap.heap)
