import { isObject } from '../shared/index.js'
import { reactive } from './reactive.js'
import { tarck, trigger } from './effect.js'

const get = createGetter()
const set = createSetter()

function createGetter() {
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)

        // 在值初次被读取时，就要进行依赖收集
        tarck(target, 'get', key)

        if (isObject(res)) {  // 如果是对象，递归代理
            return reactive(res)
        }
        return res
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value, receiver)

        // 在值被设置时，就要触发依赖更新
        trigger(target, 'set', key)

        return res
    }
}

export const mutableHandlers = {
    get,
    set
}