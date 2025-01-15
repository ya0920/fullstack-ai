<template>
    <div class="category">
        <div class="title">文章分类</div>
        <ul class="category-list">
            <li class="item" v-for="n in 8">
                <span>前端开发(15)</span>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.category {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;

    .title {
        font-weight: 600;
        font-size: 18px;
        color: #000000;
        line-height: 28px;
        margin-bottom: 12px;
    }

    .category-list {
        overflow: hidden; // 设置成BFC

        .item {
            float: left;
            margin: 4px;
            overflow: auto; // 让li成为一个BFC容器，y轴方向的margin会重叠

            span {
                display: block;
                font-weight: 400;
                font-size: 14px;
                color: #4B5563;
                line-height: 20px;
                padding: 4px 12px;
                background: #F3F4F6;
                border-radius: 100px;
            }
        }
    }
}
</style>