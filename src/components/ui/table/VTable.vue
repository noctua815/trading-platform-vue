<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

interface Column {
  name: string
}

const props = defineProps<{
  columns: Column[]
  layout: string // 'default' or another
}>()

const layoutClass = computed(() => {
  if (props.layout === 'default') return 'table-layout'
  else return `table-layout-${props.layout}`
})
</script>

<template lang="pug">
.table
  .table__head(:class="layoutClass")
    .table__head-item(v-for="(item, i) of columns" :key="i" :title="item.name") {{ item.name }}
  .table__body
    .table__body-scroll
      slot
</template>

<style lang="scss" scoped>
.table {
  &__head {
    font-size: 12px;
    line-height: 16px;
    padding: 9px 10px 10px;
    color: var(--black-white);

    &-item {
      @include text-overflow-ellipsis;
    }
  }

  &__body {
    position: relative;
    height: 100%;
    max-height: 280px;

    &-scroll {
    }
  }
}
</style>
