<script setup>
import { reactive } from 'vue'
import DragItem from '@ui/DragItem.vue'
import VTable from '@ui/table/VTable.vue'
import RealtimeFrameItem from '@/components/terminal/RealtimeFrameItem.vue'

const columns = reactive([
  { name: 'Frame', type: '' },
  { name: 'Range', type: '' },
  { name: 'STD', type: '' },
  { name: 'DELTA', type: '' },
  { name: 'MIDPRICE %', type: '' },
  { name: 'PARAM X', type: '' },
  { name: 'PARAM Y', type: '' },
  { name: 'PARAM Z', type: '' },
])

const list = reactive([
  {
    index: 1,
    range: 6.571,
    std: 1.201,
    delta: 1.889,
    midPrice: 0.02,
    paramX: 'value',
    paramY: 'value',
    paramZ: 'value',
    frame: {
      input: 3,
      selector: 'sec',
    },
  },
  {
    index: 1,
    range: 6.571,
    std: 1.201,
    delta: 1.889,
    midPrice: 0.02,
    paramX: 'value',
    paramY: 'value',
    paramZ: 'value',
    frame: {
      input: 60,
      selector: 'msec',
    },
  },
  {
    index: 1,
    range: 6.571,
    std: 1.201,
    delta: 1.889,
    midPrice: 0.02,
    paramX: 'value',
    paramY: 'value',
    paramZ: 'value',
    frame: {
      input: 1000,
      selector: 'tick',
    },
  },
])
</script>

<template lang="pug">
DragItem(title="Realtime Info" small-padding)
  template(#body)
    VTable(:columns="columns" layout="frame")
      RealtimeFrameItem(v-for="(item, i) of list" :key="i" :item="item")
</template>

<style lang="scss" scoped></style>
