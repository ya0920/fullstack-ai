import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(2)
  const [num, setNum] = useState(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => {
      console.log('卸载了');
      clearInterval(timer)
    }

  }, [count])

  // console.log('App');  ajax
  


  const add = () => {
    setCount(count + 1)
    setNum(num + 1)
  }

  return (
    <button onClick={add}>{count}</button>
  )
}

export default App;