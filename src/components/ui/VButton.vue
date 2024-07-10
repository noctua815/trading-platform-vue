<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
  text: {
    type: String,
    default: 'Add'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'gray',
    validator: (value) => ['gray', 'red', 'green'].includes(value)
  }
})

const click = () => {
  emit('click')
}
</script>

<template lang="pug">
button.btn(:class="[`btn--${color}`]"
  @click="click"
  :disabled="disabled")
  .btn__text {{ text }}
  .btn__bg
</template>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3px 12px 4px;
  color: var(--black);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s ease;
  overflow: hidden;

  &__text {
    position: relative;
    z-index: 1;
    font-family: var(--font-family-secondary);
    font-size: 14px;
    line-height: 21px;
  }

  &__bg {
    @include abs;
    z-index: 0;
    background-color: var(--black);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    .btn__bg {
      opacity: 0.1;
    }
  }

  &:active {
    .btn__bg {
      opacity: 0.2;
    }
  }

  &--gray {
    color: var(--black-white);
    background-color: var(--c-gray-btn);

    .btn__bg {
      background-color: var(--black-white);
    }

    &:hover {
      .btn__bg {
        opacity: 0.05;
      }
    }

    &:active {
      .btn__bg {
        opacity: 0.1;
      }
    }
  }

  &--red {
    color: var(--white);
    background-color: var(--red);
  }

  &--green {
    color: var(--white);
    background-color: var(--green);
  }
}
</style>
