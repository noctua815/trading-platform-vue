<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'
import DragItem from '@ui/DragItem.vue'
import { Line } from 'vue-chartjs'
import 'chartjs-adapter-luxon'
import {
  chartOptions,
  datasetConfig,
  getDate,
  DatasetConfig,
  DataPoint,
} from '@/components/terminal/chartConfig'
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const loaded = ref(false)
const chartData = reactive({
  datasets: [] as DatasetConfig[],
})

const loadData = () => {
  const data = getRawArray()
  chartData.datasets = [{ ...datasetConfig, data }]
  loaded.value = true
}
const getRawArray = (): DataPoint[] => {
  return [
    {
      x: '2023-04-03T13:25:07.837+03:00',
      y: 37,
    },
    {
      x: '2023-04-02T13:25:07.837+03:00',
      y: 30,
    },
    {
      x: '2023-04-01T13:25:07.837+03:00',
      y: 46,
    },
    {
      x: '2023-03-31T13:25:07.837+03:00',
      y: 39,
    },
    {
      x: '2023-03-30T13:25:07.837+03:00',
      y: 28,
    },
    {
      x: '2023-03-29T13:25:07.837+03:00',
      y: 30,
    },
    {
      x: '2023-03-28T13:25:07.837+03:00',
      y: 58,
    },
    {
      x: '2023-03-27T13:25:07.837+03:00',
      y: 31,
    },
    {
      x: '2023-03-26T13:25:07.837+03:00',
      y: 59,
    },
    {
      x: '2023-03-25T13:25:07.837+02:00',
      y: 34,
    },
    {
      x: '2023-03-24T13:25:07.837+02:00',
      y: 43,
    },
    {
      x: '2023-03-23T13:25:07.837+02:00',
      y: 21,
    },
    {
      x: '2023-03-22T13:25:07.837+02:00',
      y: 31,
    },
    {
      x: '2023-03-21T13:25:07.837+02:00',
      y: 56,
    },
    {
      x: '2023-03-20T13:25:07.837+02:00',
      y: 55,
    },
    {
      x: '2023-03-19T13:25:07.837+02:00',
      y: 54,
    },
    {
      x: '2023-03-18T13:25:07.837+02:00',
      y: 48,
    },
    {
      x: '2023-03-17T13:25:07.837+02:00',
      y: 24,
    },
    {
      x: '2023-03-16T13:25:07.837+02:00',
      y: 28,
    },
    {
      x: '2023-03-15T13:25:07.837+02:00',
      y: 57,
    },
    {
      x: '2023-03-14T13:25:07.837+02:00',
      y: 29,
    },
  ]
}
const getArray = (count = 20, min = 1, max = 100) => {
  const today = new Date(2020, 1, 2)
  const diff = max - min
  let day = getDate(today, 1)
  let data = []

  for (let i = 0; i < count; i++) {
    let rand = Math.random()
    rand = Math.floor(rand * diff)
    rand = rand + min
    day = getDate(day, 1)
    data.push({
      x: day,
      y: rand,
    })
  }

  return data
}
nextTick(() => {
  loadData()
})
</script>

<template lang="pug">
DragItem(title="Statistic" expansion full-width no-padding class="statistic")
  template(#body)
    .chart
      .chart-wr
        Line(v-if="loaded"
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData")
</template>

<style lang="scss" scoped>
.statistic {
  margin-bottom: 20px;
}

.chart {
  width: 100%;

  &:after {
    content: '';
    display: block;
  }

  &-wr {
    margin-top: 50px;
    width: 100%;
    height: 130px;
  }

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
