
import { makeAutoObservable } from "mobx"

class CounterStore {
    count = 0
    // constructor() {
    //     this.count = 0
    // }
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    
    constructor() {
        makeAutoObservable(this)  // 使这个类的属性变成可观察的
    }

    addCount() {
        this.count++
    }

    get filterList() {
        return this.list.filter(item => item > 2)
    }

    changeList() {
        this.list.push(20,21)
    }
}

const counterStore = new CounterStore()

export default counterStore