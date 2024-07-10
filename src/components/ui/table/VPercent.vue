<script setup>
import { reactive, ref, computed } from 'vue'
const props = defineProps({
  value: Number,
})

const numberType = computed(() => {
  if (props.value > 0) return 'positive'
  else if (props.value < 0) return 'negative'
  else return 'zero'
})

const output = computed(() => {
  const val = Math.abs(props.value)
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
