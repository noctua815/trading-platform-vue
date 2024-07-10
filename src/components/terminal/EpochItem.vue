<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  black: {
    type: Boolean,
    default: false,
  },
})
</script>

<template lang="pug">
.epoch-item(:class="{'is-black': black}")
  .epoch-item__name {{ name }}
  .epoch-item__value {{ value }}
</template>

<style lang="scss" scoped>
.epoch-item {
  display: flex;
  align-items: baseline;
  gap: 32px;
  font-size: 14px;
  line-height: 18px;
  color: var(--black-white);

  &.is-black {
    .epoch-item__name {
      color: var(--black-white);
    }
  }

  & + & {
    margin-top: 10px;
  }

  &__name {
    min-width: 80px;
    color: var(--c-label);
  }
}
</style>
