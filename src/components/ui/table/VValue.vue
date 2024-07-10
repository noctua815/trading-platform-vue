<script setup>
import {computed} from 'vue'

const props = defineProps({
  value: [Number, String],
  color: {
    type: String,
    default: 'black',
    validator: (value) => ['black', 'gray', 'green', 'red'].includes(value)
  },
  styles: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'bold', 'semibold'].includes(value)
  }
})
const classes = computed(() => {
  let str = `is-${props.color} `
  str += `is-${props.styles}`
  return str
})
</script>

<template lang="pug">
.value(:class="[classes]") {{ value }}
</template>

<style lang="scss" scoped>
.value {
  @include table-item;

  &.is-gray {
    color: var(--c-label);
  }

  &.is-black {
    color: var(--black-white);
  }

  &.is-green {
    color: var(--green);
  }

  &.is-red {
    color: var(--red);
  }

  &.is-bold {
    font-weight: var(--font-weight-bold);
  }

  &.is-semibold {
    font-weight: var(--font-weight-semibold);
  }
}
</style>
