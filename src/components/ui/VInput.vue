<script setup>
import {computed} from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  maxWidth: String
})

const emit = defineEmits(['update:modelValue'])
const styles = computed(() => {
  if (!props.maxWidth) return ''
  return `max-width: ${ props.maxWidth };`
})

const inputEvent = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template lang="pug">
.v-input(:style="styles")
  input(
    :value="modelValue"
    @input="inputEvent"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    ref="input"
    size="10")
</template>

<style lang="scss" scoped>
.v-input {
  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 18px;
    outline: none;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    padding: 2px 5px 3px;
    border-radius: 6px;
    border: 1px solid var(--c-field-border);
    color: var(--black-white);
    transition: border 0.2s ease;

    &:focus {
      border-color: var(--black-white);
    }
  }
}
</style>
