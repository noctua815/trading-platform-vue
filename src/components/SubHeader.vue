<script setup lang="ts">
import VStatus from '@/components/header/VStatus.vue'
import VBreadcrumbs from '@/components/header/VBreadcrumbs.vue'
</script>

<template lang="pug">
.sub-header
  .sub-header__wr
    .sub-header__left
      VBreadcrumbs
    .sub-header__right
      VStatus
</template>

<style scoped lang="scss">
.sub-header {
  padding: 17px 40px;
  width: 100%;

  &__wr {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    max-width: var(--max-layout-width);
    margin: 0 auto;
  }
}
</style>
