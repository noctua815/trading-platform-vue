<script setup>
import { reactive, ref, markRaw, defineAsyncComponent } from 'vue'
import draggable from 'vuedraggable'

import StatisticInfo from '@/components/terminal/StatisticInfo.vue'

let list = reactive([
  // { comp: 'StatisticInfo', id: 0, order: 1, props: {}, fullWidth: true},
  { comp: 'RealtimeInfo', id: 2, order: 2 },
  { comp: 'TradeOperations', id: 1, order: 3, props: {} },
  { comp: 'EpochInfo', id: 3, order: 4 },
  { comp: 'LogInfo', id: 4, order: 5 },
  { comp: 'RealtimeFrameInfo', id: 22, order: 6 },
  { comp: 'PnlInfo', id: 0, order: 7, props: {} },
])
const loadedComps = markRaw({})

const sortList = () => {
  list = list.sort((a, b) => a.order - b.order)
}
const loadComponent = (name) =>
  defineAsyncComponent(() => import(`./terminal/${name}.vue`))

function loadComponents() {
  sortList()
  for (const item of list) {
    const newComp = loadComponent(item.comp)
    loadedComps[item.comp] = newComp
  }
}

loadComponents()
</script>

<template lang="pug">
.board.wrapper
  StatisticInfo
  draggable(tag="div"
    :list="list"
    class="board-items"
    handle=".handle"
    ghost-class="ghost"
    drag-class="sortable-drag"
    item-key="id")
    template(#item="{element, index}")
      .board-item(:class="{'full-width': element.fullWidth}")
        component(:is="loadedComps[element.comp]"
          :key="index"
          v-bind="element.props")
</template>

<style lang="scss" scoped>
.board {
  //padding: 0 40px 34px;
}

.board-items {
  columns: 2;
  column-gap: 20px;
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  //gap: 20px;

  @include small-desktop {
    columns: 1;
  }
}

.board-item {
  margin-bottom: 20px;
  break-inside: avoid;
  //break-after: avoid-column;

  &.sortable-chosen {
    opacity: 1 !important;
  }

  &.full-width {
    grid-column: -1/1;
  }
}

.sortable-ghost {
  border: 1px solid red !important;
}

.sortable-chosen {
  opacity: 1 !important;
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.25) !important;
  border-radius: 12px;
  overflow: hidden;
}

.chosen {
  opacity: 1 !important;
}
.ghost {
  opacity: 1 !important;
  //cursor: grabbing;
  border-radius: 12px;
}

.sortable-drag {
  opacity: 0.2 !important;
  cursor: grabbing;
  border-radius: 12px;
}
</style>
