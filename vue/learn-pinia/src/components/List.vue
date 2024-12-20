<template>
    <div>
        <ul>
            <li v-for="(item, index) in carStore.listArr" :key="index">
                <img :src="item.pic" alt="" />
                <p class="item-name">{{ item.name }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <div class="price-container">
                    <p class="item-price">￥{{ item.price }}</p>
                    <button @click="addCar(item)">加入购物车</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import useCarStore from '../store/car.js'; //一个函数

const carStore = useCarStore();

const addCar = (item) => {
    carStore.addSelectArr(item);  //调用store里的方法
}

const addPrice = (item) => {
    carStore.addPrice(item);
}
</script>

<style lang="css" scoped>
ul {
    display: flex;
}

li {
    list-style: none;
    width: 294px;
    margin-right: 24px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

img {
    width: 294px;
    height: 294px;
    background: rgba(0, 0, 0, 0);
    border-radius: 0px 0px 0px 0px;
}

.price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-name {
    font-family: Roboto, Roboto;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    line-height: 28px;
    text-align: left;
}

.item-desc {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #6B7280;
    line-height: 24px;
    text-align: left;
}

.item-price {
    font-family: Roboto, Roboto;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
}
</style>