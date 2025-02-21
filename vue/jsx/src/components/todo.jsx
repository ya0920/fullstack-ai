// const element = <h1 id='app'>Hello, world!</h1>;
// const element = createVnode('h1', { id: 'app' }, 'Hello, world!');

// @vitejs/plugin-vue-jsx

import { defineComponent, h } from 'vue'
import { ref } from 'vue'

export const todolist =  defineComponent({

    setup() {

        function addTodo() {
            todos.value.push({
                title: tltle.value,
                done: false
            })
            tltle.value = ''
        }


        let tltle = ref('')
        let todos = ref([
            { title: '吃饭', done: false },
            { title: '睡觉', done: false },
            { title: '打豆豆', done: true }
        ])

        return () => (
            <div>
                <input type="text" vModel={tltle.value} />
                <button onClick={addTodo}>确定</button>
                <ul>
                    {
                        todos.value.map(todo => {
                            return <li>{todo.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
})

export const obutton = defineComponent({
    setup() {
        return () => (
            <button>确定xxxx</button>
        )
    }
})
