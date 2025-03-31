import './todo.css'
import { useState } from 'react'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'

function Todo() {

    const { todoStore } = useStore()
    const [newTask, setNewTask] = useState('')

    const changeValue = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = (e) => {
        if (e.keyCode === 13 && newTask.trim() !== '') { // 回车键
            todoStore.add(newTask)
            setNewTask('')
        }
    }
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    autoFocus
                    autoComplete="off"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={changeValue}
                    onKeyUp={addTask}
                />
            </header>
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {
                        todoStore.list.map(item => (
                            <li key={item.id} className={item.completed ? 'todo completed' : 'todo'}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" defaultChecked={item.completed} onClick={() => todoStore.changeStatus(item.id)} />
                                    <label >{item.title}</label>
                                    <button className="destroy" onClick={() => { todoStore.remove(item.id) }}></button>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </section>
            <footer className='footer'>
                <span className='todo-count'>
                    任务总数：{todoStore.getTotal} 已完成：{todoStore.getCompleted}
                </span>
            </footer>
        </section>
    )
}

export default observer(Todo)