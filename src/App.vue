<script setup lang="ts">
import VHeader from './components/VHeader.vue'
import SubHeader from '@/components/SubHeader.vue'
import TerminalBoard from '@/components/TerminalBoard.vue'
</script>

<template lang="pug">
main
  .layout
    .layout__head
      VHeader
    .layout__breadcrumbs
      SubHeader
    .layout__body
      TerminalBoard
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;

  &__head,
  &__breadcrumbs {
    margin-bottom: 20px;
  }

  &__body {
    padding: 0 40px 34px;
  }
}
</style>
