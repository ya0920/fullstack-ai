var levelOrder = function (root) {
  const queue = []
  const res = []
  if (!root) return res
  queue.push(root)

  while (queue.length) {
    const level = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)

      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }

    res.push(level)
  }

  return res
};


const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}

levelOrder(root)




var levelOrder = function (root) {
  const res = []
  if (!root) return res

  const queue = []
  queue.push(root)

  while (queue.length) {
    const level = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }

    res.push(level)
  }

  return res
};
