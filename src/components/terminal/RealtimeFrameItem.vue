<script setup lang="ts">
import {reactive, ref, computed} from 'vue'
import VPercent from '@ui/table/VPercent.vue'
import VSelector from '@ui/VSelector.vue'
import VInput from '@ui/VInput.vue'

interface RealtimeItem {
  index: number
  range: number
  std: number
  delta: number
  midPrice: number
  paramX: string
  paramY: string
  paramZ: string
  frame?: {
    input: string|number
    selector: string
  }
}

const props = defineProps<{
  item: RealtimeItem
}>()

const selectorList = reactive([
  {
    id: 0,
    value: 'sec'
  },
  {
    id: 1,
    value: 'msec'
  },
  {
    id: 2,
    value: 'tick'
  }
])

const value = ref(60)
</script>

<template lang="pug">
.item
  .item__wr.table-layout-frame
    .item__col.item__selector
      .group(v-if="item.frame")
        VInput(v-model="item.frame.input" max-width="48px")
        VSelector(v-model="item.frame.selector" :list="selectorList")
    .item__col {{item.range}}
    .item__col {{item.std}}
    .item__col {{item.delta}}
    .item__col
      VPercent(:value="item.midPrice")
    .item__col {{item.paramX}}
    .item__col {{item.paramY}}
    .item__col {{item.paramZ}}
</template>

<style lang="scss" scoped>
.item {
  border-radius: 8px;
  background-color: var(--c-sub-comp);
  color: var(--black-white);

  & + & {
    margin-top: 6px;
  }

  &__wr {
    padding: 9px 10px;
  }

  &__col {
    @include text-overflow-ellipsis;
  }

  &__selector {
    overflow: visible;
  }
}

.group {
  display: flex;
  gap: 6px;
}
</style>
