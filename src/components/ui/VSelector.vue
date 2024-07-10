<script setup lang="ts">
import {reactive, ref} from 'vue'
import RectIcon from '@/assets/icons/small-rect.svg'

interface SelectorItem {
  id: number
  value: number | string
  text?: string
}

const props = defineProps<{
  list: SelectorItem[]
  modelValue: string | Number
}>()
let active: SelectorItem = reactive(props.list[0])
const opened = ref(false)

function getActive() {
  if (!props.modelValue) return
  const find = props.list.find(item => item.value === props.modelValue)
  if (find) active = find
}

getActive()

const toggle = () => {
  opened.value = !opened.value
}

const select = (item: SelectorItem) => {
  opened.value = false
  active = item
}

</script>

<template lang="pug">
.selector(:class="{'is-opened': opened}")
  .selector__head(@click="toggle")
    .selector__head-active {{ active.value }}
    .selector__head-arrow
      RectIcon
  .selector__body(v-if="opened")
    .selector__item(v-for="item of list"
      :key="item.id"
      :class="{'is-active': item.value === active.value}"
      @click="select(item)")
      .selector__item-value {{ item.value }}
      .selector__item-bg
</template>

<style lang="scss" scoped>
.selector {
  position: relative;
  z-index: 1;
  display: inline-flex;

  &.is-opened {
    z-index: 10;

    .selector__head {
      border-color: var(--black);
    }

    .selector__head-arrow {
      transform: rotate(180deg);
    }
  }

  &__head {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    min-width: 60px;
    padding: 2px 5px 3px;
    border-radius: 6px;
    border: 1px solid var(--c-field-border);
    transition: border 0.2s ease;
    user-select: none;
    cursor: pointer;

    &-active {
      font-size: 14px;
      line-height: 18px;
    }

    &-arrow {
      display: flex;
      align-items: center;
      width: 10px;
      height: 6px;
      margin-top: 2px;
      font-size: 0;
      transition: transform 0.2s ease;

      :deep(path) {
        stroke: var(--black-white);
      }
    }
  }

  &__body {
    position: absolute;
    width: 79px;
    top: calc(100% + 4px);
    right: 0;
    background-color: var(--c-selector-bg);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    overflow: hidden;
  }

  &__item {
    position: relative;
    padding: 4px 14px 6px;
    background-color: var(--c-selector-bg);
    transition: background-color 0.2s ease;
    user-select: none;
    cursor: pointer;

    &-value {
      position: relative;
      z-index: 1;
      font-size: 14px;
      line-height: 18px;
    }

    &-bg {
      @include abs;
      z-index: 0;
      background-color: var(--black-white);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      .selector__item-bg {
        opacity: 0.05;
      }
    }

    &.is-active {
      color: var(--blue);
    }
  }
}
</style>
