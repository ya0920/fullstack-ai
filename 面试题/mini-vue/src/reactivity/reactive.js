import { mutableHandlers } from './baseHandlers.js'

export const reactiveMap = new WeakMap()  // 用于缓存代理对象(弱引用对象)

export function reactive(target) {
    return createReactiveObject(target, mutableHandlers, reactiveMap)
}

function createReactiveObject(target, proxyHandlers, proxyMap) {  // 创建响应式对象
    if (typeof target !== 'object') {
        return target
    }
    
    // 如果已经代理过了，直接返回代理对象
    const exitingProxy = proxyMap.get(target) // 读取是否存在 target 值
    if (exitingProxy) {
        return exitingProxy
    }


    const proxy = new Proxy(target, proxyHandlers)
    proxyMap.set(target, proxy) // taget 是 key, proxy 是 value
    return proxy
}