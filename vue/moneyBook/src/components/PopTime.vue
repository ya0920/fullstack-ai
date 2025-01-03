<template>

    <van-popup v-model:show="show" position="bottom" round>
        <van-date-picker v-model="currentDate" title="选择年月" :min-date="minDate" :max-date="maxDate" :columns-type="columnsType" @cancel="() => show = false" @confirm="selectTime" />

    </van-popup>

</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const columnsType = ['year', 'month'];
const minDate=new Date(2020, 0);
const maxDate=new Date();
const currentDate = ref([new Date()]);

const emit = defineEmits(['updateDate']);
const selectTime = ({ selectedValues, selectedOptions, selectedIndexes }) => {
    //console.log(selectedValues);
    emit('updateDate', selectedValues);
    show.value = false;
}

defineExpose({
    show
})

</script>

<style lang="less" scoped></style>