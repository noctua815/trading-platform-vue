<script setup>
import { ref } from 'vue'
import RectIcon from '@/assets/icons/rect.svg'
import DragIcon from '@/assets/icons/drag.svg'

const props = defineProps({
  title: String,
  fullWidth: {
    type: Boolean,
    default: false,
  },
  expansion: {
    type: Boolean,
    default: false,
  },
  opened: {
    type: Boolean,
    default: true,
  },
  smallPadding: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
})

const showBody = ref(!props.expansion || props.opened)

function toggleBody() {
  showBody.value = !showBody.value
}
</script>

<template lang="pug">
.drag(:class="{'full-width': fullWidth, 'small-padding': smallPadding, 'no-padding': noPadding}")
  .drag__head
    .drag__head-title(@click="toggleBody"
      :class="{'expansion': expansion, 'is-opened': showBody}")
      .drag__head-title__text {{ title }}
      .drag__head-title__icon(v-if="expansion")
        RectIcon
    .drag__head-btns
      .drag__head-btns__other
        slot(name="head-btn")
      .drag__head-btns__handle.handle
        DragIcon
  .drag__body(v-if="showBody")
    .drag__body-wr
      slot(name="body")
</template>

<style lang="scss" scoped>
.drag {
  background: var(--c-bg-comp);
  border-radius: 12px;

  &.small-padding {
    .drag__body {
      padding: 0 8px 8px;
    }
  }

  &.no-padding {
    .drag__body {
      padding: 0;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px 17px;
    gap: 40px;

    &-title {
      display: flex;
      align-items: center;
      flex-grow: 1;
      color: var(--black-white);

      &.expansion {
        cursor: pointer;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.6;
        }

        &:active {
          opacity: 0.4;
        }
      }

      &.is-opened {
        .drag__head-title__icon {
          transform: rotate(180deg);
        }
      }

      &__text {
        font-weight: var(--font-weight-semibold);
        margin-right: 6px;
      }

      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        font-size: 0;
        transition: transform 0.2s ease;

        svg {
          :deep(path) {
            stroke: var(--black-white);
          }
        }
      }
    }

    &-btns {
      display: flex;
      align-items: flex-end;
      flex-shrink: 0;
      gap: 20px;

      &__other {
        width: 24px;
        height: 24px;
      }

      &__handle {
        width: 24px;
        height: 24px;
        cursor: grab;
        opacity: 0.4;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.6;
        }

        &:active {
          opacity: 1;
        }
      }
    }
  }

  &__body {
    padding: 0 20px 20px;
  }
}
</style>
