<template>
  <div class="chart-container" ref="chartRef"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: Array
})

const chartRef = ref(null)
let chartInstance = null

const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value)

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: props.data.map(item => item.name),
      axisLabel: {
        color: '#666',
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          color: '#DCDFE6'
        }
      }
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        color: '#666'
      },
      splitLine: {
        lineStyle: {
          color: '#F0F2F5'
        }
      }
    },
    series: [{
      type: 'bar',
      data: props.data.map(item => ({
        value: item.value,
        itemStyle: {
          color: getColor(item.value)
        }
      })),
      barWidth: '60%',
      label: {
        show: true,
        position: 'top',
        color: '#333'
      },
      itemStyle: {
        borderRadius: [4, 4, 0, 0]
      }
    }]
  }

  chartInstance.setOption(option)
}

const getColor = (value) => {
  if (value > 80) return '#ff4444'
  if (value > 60) return '#ffa500'
  return '#4CAF50'
}

const resizeHandler = () => {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chartInstance?.dispose()
})

watch(() => props.data, () => {
  initChart()
}, { deep: true })
</script>

<style lang="less" scoped>
.chart-container {
  width: 100%;
  height: 400px;
  background: white;
  border-radius: 8px;
}
</style>