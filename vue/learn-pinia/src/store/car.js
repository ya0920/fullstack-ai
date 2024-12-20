import { defineStore } from 'pinia' //开创一个可用的仓库 
import { computed, reactive } from 'vue'

// const useCarStore = defineStore('car', {
//     state: () => ({ //仓库中的数据源
//         listArr: [
//             {
//                 pic: 'https://img0.baidu.com/it/u=3664559370,4167784460&fm=253&fmt=auto&app=138&f=JPEG?w=823&h=800',
//                 name: '无线蓝牙耳机',
//                 price: 100,
//                 desc: '高清音质 持久续航'
//             },
//             {
//                 pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01kT1RqH1xeqow7dlGT_%21%212208418306469-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1737114845&t=62fa6ec91546fa59b6f5eb71665fce06',
//                 name: '智能手表',
//                 price: 599,
//                 desc: '多功能运动监测'
//             },
//             {
//                 pic: 'https://img2.baidu.com/it/u=2406623817,3374856095&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
//                 name: '便携音响',
//                 price: 399,
//                 desc: '环绕立体声'
//             },
//             {
//                 pic: 'https://img2.baidu.com/it/u=402051968,367416785&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
//                 name: '移动电源',
//                 price: 199,
//                 desc: '大容量快充'
//             },
//         ],
//         selectNum: 0,
//         totalPrice: 0,
//     })

// })
export const useCarStore = defineStore('car', () => {
    const listArr = [
        {
            pic: 'https://img0.baidu.com/it/u=3664559370,4167784460&fm=253&fmt=auto&app=138&f=JPEG?w=823&h=800',
            name: '无线蓝牙耳机',
            price: 100,
            desc: '高清音质 持久续航'
        },
        {
            pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01kT1RqH1xeqow7dlGT_%21%212208418306469-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1737114845&t=62fa6ec91546fa59b6f5eb71665fce06',
            name: '智能手表',
            price: 599,
            desc: '多功能运动监测'
        },
        {
            pic: 'https://img2.baidu.com/it/u=2406623817,3374856095&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
            name: '便携音响',
            price: 399,
            desc: '环绕立体声'
        },
        {
            pic: 'https://img2.baidu.com/it/u=402051968,367416785&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            name: '移动电源',
            price: 199,
            desc: '大容量快充'
        },
    ]
    const selectNum = computed(() => selectArr.length)
    const totalPrice = computed(() => selectArr.reduce((total, item) => total + item.price, 0))
    const selectArr = reactive([])//选中的商品

    const addSelectArr = (item) => {
        selectArr.push(item)
    }

    const addTotalPrice = (item) => {
        totalPrice += item.price
    }
    return {
        listArr,
        selectNum,
        totalPrice,
        addSelectArr,
    }
})

export default useCarStore