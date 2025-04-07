import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log('组件渲染完成');

    return () => {  // 清理副作用
      console.log('组件即将销毁');
    }
  }, [count])  // 为 count 添加副作用函数


  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App