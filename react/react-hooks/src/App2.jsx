import { useWindowScroll, useDebounce } from './hooks.js'
import { useEffect } from 'react'

function App() {
  // const [instance] = useWindowScroll()
  // useEffect(() => {
  //   console.log(instance)
  // })

  const handle = useDebounce(() => {
    console.log('hello');
  })

  return (
    <div style={{height: '200vh'}} onClick={handle}>hello</div>
  )
}

export default App;