import { DateTime } from 'luxon'

export interface DatasetConfig {
  label: string
  borderColor: string
  borderWidth: number
  tension: number
  data?: DataPoint[]
}

export interface DataPoint {
  x: string
  y: number
}

const RED = '#df4949'
const GREEN = '#27ae60'

export const datasetConfig: DatasetConfig = {
  label: 'Value',
  borderColor: RED,
  borderWidth: 1.5,
  tension: 0.15,
}

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'point',
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  layout: {
    padding: {
      autoPadding: false,
      bottom: 20,
    },
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: RED,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: RED,
      pointHoverBorderColor: RED,
    },
  },
  scales: {
    x: {
      offset: false,
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          week: 'dd MMMM',
          day: 'dd MMMM',
        },
      },
      scaleLabel: {
        display: true,
        labelString: 'Date',
      },
      ticks: {
        padding: 0,
        callback: (value: number, index: number) => {
          if ([3, 10, 16].includes(index)) {
            return DateTime.fromMillis(value).toFormat('dd MMMM')
          }
        },
      },
      grid: {
        display: false,
        tickLength: 30,
      },
      border: {
        display: false,
      },
    },
    y: {
      display: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        tickLength: 0,
      },
      border: {
        display: false,
      },
      min: -10,
      max: 70,
    },
  },
}

export const getDate = (day: Date, offset: number) => {
  try {
    // @ts-ignore
    let dt = new DateTime(day)
    let res = dt.minus({ days: offset })
    return res
  } catch (e) {
    console.log(e)
  }
}
