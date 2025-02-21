import { defineComponent, h } from 'vue'

// 被 defineComponent 包裹的内容，就是一个 Vue 组件
export default defineComponent({
    props: { // 接收外部传来的参数
        level: {
            type: Number,
            required: true
        }
    },

    setup(props, { slots }) {
        const tag = `h${props.level}` // 动态生成标签名
        // return () => h(`h${props.level}`, {}, slots.default()) // 生成一个虚拟 DOM，渲染 h1-h6 标签
        return () => <tag> { slots.default() } </tag>
    }
})