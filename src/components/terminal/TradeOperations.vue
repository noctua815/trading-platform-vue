<script setup>
import { reactive } from 'vue'
import DragItem from '@ui/DragItem.vue'
import PlusBtn from '@ui/PlusBtn.vue'
import SquareBtn from '@ui/SquareBtn.vue'

const operations = reactive([
  {
    id: 1,
    color: 'green',
    list: [
      { value: 0.1, counter: 14 },
      { value: 0.26 },
      { value: 0.5 },
      { value: 0.76 },
    ],
  },
  {
    id: 2,
    color: 'blue',
    list: [
      { value: 1 },
      { value: 2, counter: 2 },
      { value: 1.5 },
      { value: 2.5, counter: 4 },
    ],
  },
  {
    id: 3,
    color: 'cerulean',
    list: [{ value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }],
  },
  {
    id: 4,
    color: 'violet',
    list: [{ value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }],
  },
])

const select = (operation) => {
  console.log('select', operation)
}
</script>

<template lang="pug">
DragItem(title="Trade Operations" expansion)
  template(#head-btn)
    PlusBtn
  template(#body)
    .grid
      .grid__group(v-for="group of operations" :key="group.id")
        SquareBtn(v-for="(item, i) of group.list"
          :key="i"
          :color="group.color"
          :value="item.value"
          :counter="item.counter"
          @select="select(item)")
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-template-columns: repeat(4, minmax(10px, max-content));
  justify-content: space-between;
  gap: 20px;

  @include small-desktop {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    //grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }

  &__group {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px 6px;
    //border: 1px solid red;
  }
}
</style>
