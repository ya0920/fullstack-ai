function BFS(入口坐标) {
  let queue = [入口坐标]

  while(queue.length) {
    const top = queue.shift()
    // 审查 top

    // 站在top坐标上能看到的所有坐标全部记录下来
    for (top坐标上能看到的所有坐标) {
      queue.push(top能到达的坐标)
    }
  }
}