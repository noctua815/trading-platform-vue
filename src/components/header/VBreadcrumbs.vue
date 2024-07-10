<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import RectIcon from '@/assets/icons/right-rect.svg'

const routes = reactive([
  {
    name: 'BINANCE',
    path: '/',
  },
  {
    name: 'SPOT',
    path: '/',
  },
  {
    name: 'BTCUSDT',
    sub: 'MULTIBOX 2',
    path: '/',
  },
])
</script>

<template lang="pug">
.breadcrumbs
  .item(v-for="(item, i) in routes")
    a.item__link(:href="item.path") {{ item.name }}
    .item__sub(v-if="item.sub")
      span :
      span {{ item.sub }}
    .item__divider(v-if="i < routes.length - 1")
      RectIcon
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.item {
  display: flex;
  align-items: center;
  color: var(--black-white);

  &__link {
    opacity: 0.4;
    color: inherit;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 1;
    }
  }

  &__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    margin: 0 8px;
    font-size: 0;

    svg {
      stroke: var(--black-white);
      opacity: 0.4;
    }
  }

  &:last-child {
    .item__link {
      opacity: 1;
      color: var(--blue);
    }

    .item__sub {
      color: var(--green);

      span:first-child {
        padding: 0 4px;
        color: var(--black-white);
      }
    }

    &:after {
      content: none;
    }
  }
}
</style>
