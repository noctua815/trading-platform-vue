<script setup>
import RealtimeItem from '@/components/terminal/RealtimeItem.vue'
import DragItem     from '@ui/DragItem.vue'
import VTable       from '@ui/table/VTable.vue'
import {reactive}   from 'vue'

const columns = reactive([
  {name: '#', type: ''},
  {name: 'Duration', type: ''},
  {name: 'Open PNL', type: ''},
  {name: 'Delta', type: ''},
  {name: 'DELTA', type: ''},
  {name: 'MIDPRICE %', type: ''},
  {name: 'PARAM X', type: ''},
  {name: 'PARAM Y', type: ''}
])

const list = reactive([
  {index: 1, duration: '0:23', pnl: -6.571, delta: 1.201, delta2: 0.1, midPrice: 0.02},
  {index: 2, duration: '13:41', pnl: -4.571, delta: 26.39, delta2: 0.26, midPrice: -0.03},
  {index: 3, duration: '01:23:01', pnl: -1.23, delta: 1.889, delta2: 7, midPrice: 0.12},
  {index: 4, duration: '0:23', pnl: -6.571, delta: 1.201, delta2: 0.1, midPrice: 0},
  {index: 5, duration: '13:41', pnl: -4.571, delta: 26.39, delta2: 0.26, midPrice: -0.03}
])

const onKillItem = (index) => {

}
</script>

<template lang="pug">
DragItem(title="Realtime Info" small-padding)
  template(#body)
    VTable(:columns="columns" layout="default")
      RealtimeItem(v-for="item of list"
        :key="item.index"
        :item="item"
        @onKillItem="onKillItem"
      )
</template>

<style lang="scss" scoped>

</style>
