<script setup lang="ts">
import {defineEmits} from 'vue'
import VPercent from '@ui/table/VPercent.vue'
import VBtn from '@ui/VButton.vue'

const emit = defineEmits(['onKillItem'])

interface RealtimeItem {
  index: number
  duration: string
  pnl: number
  delta: number
  delta2: number
  midPrice: number
}

const props = defineProps<{
  item: RealtimeItem
}>()

const onKillItem = () => {
  emit('onKillItem', props.item.index)
}

const closeItem = () => {
  console.log('closeItem', props.item)
}
</script>

<template lang="pug">
.item
  .item__wr.table-layout
    .item__col {{item.index}}
    .item__col {{item.duration}}
    .item__col {{item.pnl}}
    .item__col {{item.delta}}
    .item__col {{item.delta2}}
    .item__col
      VPercent(:value="item.midPrice")
    .item__col
      VBtn(text="Close" @click="closeItem")
    .item__col
      VBtn(text="Kill" color="red" @click="killItem")
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
}
</style>
