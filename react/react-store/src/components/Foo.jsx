import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/index'

function Foo() {

    const store = useStore()
  return (
    <div>
        Foo
        <ul>
            {
                store.taskStore.list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}
export default observer(Foo)