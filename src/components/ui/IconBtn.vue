<script setup lang="ts">
import { computed } from 'vue'
import SettingsIcon from '@/assets/icons/settings.svg'
import UserIcon from '@/assets/icons/user.svg'

const props = defineProps({
  text: String,
  icon: {
    type: String,
    validator: (value: string) => ['settings', 'user'].includes(value),
  },
})
const iconComponent = computed(() => {
  switch (props.icon) {
    case 'settings':
      return SettingsIcon
    case 'user':
      return UserIcon
  }
})
</script>

<template lang="pug">
.icon-btn
  .icon-btn__icon
    component(:is="iconComponent")
  .icon-btn__text {{ text }}
</template>

<style lang="scss" scoped>
.icon-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    font-size: 0;

    svg {
      :deep(path) {
        stroke: var(--black-white);
      }
    }
  }

  &__text {
    text-transform: capitalize;
    color: var(--black-white);
  }
}
</style>
