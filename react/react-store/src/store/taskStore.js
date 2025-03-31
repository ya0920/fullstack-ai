import { makeAutoObservable } from "mobx"

class TaskStore{
    list = ['吃饭', '睡觉', '打豆豆']

    constructor(){
        makeAutoObservable(this)
    }

    addTask(){
        this.list.push('新任务')
    }
}

const taskStore = new TaskStore()
export default taskStore