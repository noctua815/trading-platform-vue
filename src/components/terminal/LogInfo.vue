<script setup>
import { reactive } from 'vue'
import DragItem from '@ui/DragItem.vue'
import LogItem from '@/components/terminal/LogItem.vue'

const list = reactive([
  {
    time: '21:01:23',
    info: [{ text: 'Order ID498032 created' }],
  },
  {
    time: '21:01:41',
    info: [{ text: 'Order ID203900 filled' }],
  },
  {
    time: '21:02:02',
    info: [{ text: 'Order ID302930' }, { text: 'rejected', bold: true }],
  },
  {
    time: '21:03:11',
    info: [{ text: 'Order ID302000 stopped' }],
  },
  {
    time: '21:04:25',
    info: [{ text: '[Account suspended]', bold: true }],
  },
  {
    time: '21:05:03',
    info: [{ text: '[trigger] midprice -1.12 % for 10 seconds', bold: true }],
  },
])
</script>

<template lang="pug">
DragItem(title="Log" expansion)
  template(#body)
    .list
      LogItem(v-for="(item, i) of list" :key="i" :time="item.time" :info="item.info")
</template>

<style lang="scss" scoped></style>
