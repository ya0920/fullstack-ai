const targetMap = new WeakMap()
let activeEffect = null  // 附作用函数

export const effect = (fn, options = {}) => {
    const effectFn = () => {
        try {
            activeEffect = effectFn
            return fn()
        } finally {
            activeEffect = null
        }

    }
    effectFn()
}

// depsMap(Map) = {
//     target(Map): {
//         key1(Set): [effect1, effect2],
//         key2(Set): [effect1, effect2],
//         ...
//     },
//     target2: {
//         key1(Set): [effect1, effect2],
//         key2(Set): [effect1, effect2],
//         ...
//     },
//     ...
// }




export const tarck = (target, type, key) => {
    let depsMap = targetMap.get(target)

    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()
    }
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
}
export const trigger = (target, type, key) => {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        return
    }
    const deps = depsMap.get(key)
    if (deps) {
        deps.forEach(effect => { // es6 之前是数组的 forEach 方法，es6 之后打造了 Set 和 Map 的 forEach 方法
            effect()
        })
    }
}