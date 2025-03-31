import { makeAutoObservable } from "mobx";

class TodoStore {
    list = [
        {
            id: 1,
            title: '学习react',
            completed: false
        },
        {
            id: 2,
            title: '学习vue',
            completed: true
        }
    ]
    constructor() {
        makeAutoObservable(this)
    }

    add(task) {
        this.list.push({
            id: this.list.length + 1,
            title: task,
            completed: false
        })
    }

    remove(id) {
        this.list = this.list.filter(item => item.id !== id)
    }

    changeStatus(id) {
        const index = this.list.findIndex(item => item.id === id)
        this.list[index].completed = !this.list[index].completed
    }

    get getCompleted() {
        const completed = this.list.filter(item => item.completed)
        return completed.length
    }

    get getTotal() {
        return this.list.length
    }
}

export default new TodoStore()