import { DateTime } from 'luxon'

const RED = '#df4949'
const GREEN = '#27ae60'

export const datasetConfig = {
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
        callback: (value, index) => {
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
      // beginAtZero: true,
      min: -10,
      max: 70,
    },
  },
}

export const getDate = (day, offset) => {
  try {
    let dt = new DateTime(day)
    let res = dt.minus({ days: offset })
    return res
  } catch (e) {
    console.log(e)
  }
}
