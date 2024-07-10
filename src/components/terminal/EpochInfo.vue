<script setup>
import { reactive } from 'vue'
import DragItem from '@ui/DragItem.vue'
import EpochItem from '@/components/terminal/EpochItem.vue'
</script>

<template lang="pug">
DragItem(title="Epoch Info" expansion)
  template(#body)
    .grid
      .grid__head
        .grid__col
          EpochItem(name="Total now" value="11" black)
        .grid__col
          .status
            span 1213
            span 210
      .grid__body
        .grid__col
          EpochItem(name="New" value="11")
          EpochItem(name="Not finished" value="1213")
          EpochItem(name="Part.filled" value="1112")
          EpochItem(name="Expired" value="10")
        .grid__col
          EpochItem(name="Cancelled" value="81")
          EpochItem(name="Not started" value="3")
          EpochItem(name="Reserve" value="X")
          EpochItem(name="Reserve" value="Y")
</template>

<style lang="scss" scoped>
.grid {
  &__head,
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  &__head {
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--black-10);
  }

  &__body {
  }
}

.status {
  span:nth-child(1) {
    color: var(--green);

    &:after {
      content: '/';
      padding: 2px;
      color: var(--black-white);
    }
  }

  span:nth-child(2) {
    color: var(--red);
  }
}
</style>
