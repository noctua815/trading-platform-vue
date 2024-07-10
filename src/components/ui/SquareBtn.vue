<script setup>
defineProps({
  value: Number,
  counter: Number,
  color: {
    type: String,
    default: 'green',
    validator: (value) => ['green', 'blue', 'cerulean', 'violet'].includes(value)
  }
})
</script>

<template lang="pug">
.square-btn(@click="$emit('select')" :class="`square-btn--${color}`")
  .square-btn__value {{ value }}
  .square-btn__counter(v-if="counter") {{ counter }}
  .square-btn__bg
</template>

<style lang="scss" scoped>
.square-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(40px, 4.5vw, 60px);
  height: 50px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;

  @include small-desktop {
    width: 60px;
  }

  &:hover {
    .square-btn__bg {
      opacity: 0.1;
    }
  }

  &:active {
    .square-btn__bg {
      opacity: 0.2;
    }
  }

  &--green {
    background-color: var(--green);
  }

  &--blue {
    background-color: var(--light-blue);

  }

  &--cerulean {
    background-color: var(--cerulean);
  }

  &--violet {
    background-color: var(--violet);
  }

  &__bg {
    @include abs;
    z-index: 0;
    background-color: var(--black);
    opacity: 0;
    border-radius: inherit;
    transition: opacity 0.3s ease;
  }

  &__value {
    position: relative;
    z-index: 1;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: var(--white);
  }

  &__counter {
    position: absolute;
    z-index: 1;
    top: -5px;
    right: -5px;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    border-radius: 20px;
    background-color: var(--black-white);
    color: var(--white-black);
  }
}
</style>
