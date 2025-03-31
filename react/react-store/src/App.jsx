import { useState, useEffect, use } from 'react'
import { useStore } from './store/index'
import { observer } from 'mobx-react-lite'
import Foo from './components/Foo'
import Bar from './components/Bar'


function App() {

  const store = useStore()

  useEffect(() => {
    store.personStore.getSingers()
  }, [])

  return (
    <div>
      <button onClick={() => store.counterStore.addCount()}>{store.counterStore.count}</button>
      <ul onClick={() => store.counterStore.changeList()}>
        {
          store.counterStore.filterList.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <ul>
        {
          store.personStore.singers.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>
      <Foo />
      <Bar />
    </div>
  )
}

export default observer(App)