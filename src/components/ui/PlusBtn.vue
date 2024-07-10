<script setup lang="ts">
import PlusIcon from '@/assets/icons/plus.svg'
</script>

<template lang="pug">
.plus-btn(@click="$emit('click')")
  PlusIcon
</template>

<style lang="scss" scoped>
.plus-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 0;
  cursor: pointer;
  user-select: none;
  opacity: 0.4;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
}
</style>
