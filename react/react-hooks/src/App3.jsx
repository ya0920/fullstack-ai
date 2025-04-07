import { useState, useEffect, use } from "react";
import axios from 'axios'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return Math.pow(props.num, 2)
    // return props.num ** 2
  })

  return (
    <button onClick={() => setCount(count+1)}>{count}</button>
  )
}



function App () {
  const [name, setName] = useState(() => {
    return '阿炜'
  })

  const [list, setList] = useState([])
  
  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer#!method=get')
      setList(res.data.data)
    }
    getData()
  }, []) // [] 空数组 只执行一次 (哪怕整个 App 函数重新执行， useEffect 也不会执行)

  console.log(list);
  
  


  return (
    <div>
      <h1>Hello { name }</h1>
      <Counter num={10}></Counter>

      <ul>
        {
          list.map(item => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}
export default App;

