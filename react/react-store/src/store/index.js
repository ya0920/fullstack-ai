import { createContext, useContext } from "react"; // 创建上下文对象
import counterStore from "./counterStore";
import personStore from "./personStore";
import taskStore from "./taskStore";
import todoStore from "./todoStore";

class RootStore {
    constructor() {
        this.counterStore = counterStore;
        this.personStore = personStore;
        this.taskStore = taskStore;
        this.todoStore = todoStore;
    }
}
const rootStore = new RootStore();


const context = createContext(rootStore) // 创建上下文对象
const useStore = () => useContext(context) // 创建一个自定义的hook，方便在组件中使用
export { useStore }