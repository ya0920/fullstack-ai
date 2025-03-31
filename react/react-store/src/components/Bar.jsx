import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/index'

function Bar() {
    const {taskStore} = useStore()
  return (
    <div>
        Bar
        <ul onClick={() => taskStore.addTask()}>
            {
                taskStore.list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}
export default observer(Bar)