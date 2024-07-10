<script setup lang="ts">
import IconBtn from '@ui/IconBtn.vue'
import ThemeBtn from '@ui/ThemeBtn.vue'
import { ref } from 'vue'

const version = ref('v.0231')
</script>

<template lang="pug">
header.header
  .header__wr
    .header__version TRADING TERMINAL {{version}}
    .header__group
      IconBtn(text="Settings" icon="settings")
      IconBtn(text="Vika D" icon="user")
      ThemeBtn
</template>

<style scoped lang="scss">
.header {
  padding: 17px 40px;
  width: 100%;
  border-bottom: 1px solid var(--c-border);

  &__wr {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    max-width: var(--max-layout-width);
    margin: 0 auto;
  }

  &__version {
    font-family: var(--font-family-secondary);
    color: var(--black-white);
    font-size: 16px;
    line-height: 24px;
  }

  &__group {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
  }
}
</style>
