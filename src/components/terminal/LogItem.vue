<script setup="">
const props = defineProps({
  time: String,
  info: Array,
})
</script>

<template lang="pug">
.log
  .log__time {{ time }}
  .log__info
    span(v-for="(item, index) of info"
      :key="index"
      :class="{'is-bold': item.bold}") {{ item.text }}
</template>

<style lang="scss" scoped>
.log {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14px;
  line-height: 18px;
  color: var(--black-white);

  & + & {
    margin-top: 3px;
  }

  &__time {
    width: 70px;
    flex-shrink: 0;
  }

  &__info {
    span {
      padding-right: 3px;
    }
  }
}

.is-bold {
  font-weight: var(--font-weight-bold);
}
</style>
