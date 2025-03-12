function observe(data) {
    if (!data || typeof data !== 'object') 
        return;
    
    new Observer(data);

}


class Observer{
    constructor(value) {
        this.value = value
        this.walk(value);

    }
    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

function defineReactive(obj, key, val) {
    observe(val);

    Observer.defineReactive(obj, key, {
        get() {
            return val;
        },
        set(newVal) {
            if (newVal === val) return;
            val = newVal;
            console.log('set', newVal)
        }
    })

}

class Vue{
    constructor(options) {
        this.$options = options;
        this.$data = options.data;
        // 处理data变成响应式
        observe(this.$data);

    }
}

class Compile {
    
    constructor(el, vm) {
        this.$el = document.querySelector(el);
        this.$vm = vm;
        if (this.$el) {
            this.compile(this.$el)
        }
    }
    compile(el) {
        el.childNodes.forEach(node => {
            if (node.nodeType === 1) {
                this.compileElement(node)
            } else if (this.isInter(node)) {
                this.compileText(node)
            }
            if (node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
}

const v = new Vue({
    el: '#app',
    template:`<input v-model="msg">{{msg}}</input>`,
    data: {
        msg: ''
    }
})