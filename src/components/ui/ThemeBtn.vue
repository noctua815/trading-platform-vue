<script setup>
import { reactive, ref } from 'vue'
import ThemeIcon from '@/assets/icons/theme.svg'

const theme = ref('light')
const themes = reactive(['light', 'dark'])
function switchTheme() {
  theme.value = themes.find((item) => item !== theme.value)
  setDefaultTheme(theme.value)
}
function setDefaultTheme(value) {
  document.documentElement.className = value
}
setDefaultTheme(theme.value)
</script>

<template lang="pug">
.theme-btn(@click="switchTheme")
  ThemeIcon
</template>

<style lang="scss" scoped>
.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 0;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s ease;

  svg {
    :deep(path) {
      stroke: var(--black-white);

      &:last-child {
        fill: var(--black-white);
      }
    }
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }
}
</style>
