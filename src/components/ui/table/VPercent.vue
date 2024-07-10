<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
const props = defineProps({
  value: Number,
})

const numberType = computed(() => {
  const val = props.value || 0
  if (val > 0) return 'positive'
  else if (val < 0) return 'negative'
  else return 'zero'
})

const output = computed(() => {
  const val = Math.abs(props.value || 0)
  switch (numberType.value) {
    case 'positive':
      return `+ ${val} %`
    case 'negative':
      return `- ${val} %`
    default:
      return `${val} %`
  }
})
</script>

<template lang="pug">
.percent(:class="[numberType]") {{ output }}
</template>

<style lang="scss" scoped>
.percent {
  @include table-item;
  color: var(--black);

  &.positive {
    color: var(--green);
  }

  &.negative {
    color: var(--red);
  }

  &.zero {
    color: var(--black-white);
  }
}
</style>
