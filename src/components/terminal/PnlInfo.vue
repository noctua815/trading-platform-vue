<script setup>
import {ref}    from 'vue'
import DragItem from '@ui/DragItem.vue'
import VBtn     from '@ui/VButton.vue'
import VValue   from '@ui/table/VValue.vue'
import VInput   from '@ui/VInput.vue'

const bidAmount = ref(0.2)

const clearStats = () => {
  console.log('Clear stats')
}

const killHandler = () => {
  console.log('kill')
}

const okHandler = () => {
  console.log('ok')
}
</script>

<template lang="pug">
DragItem(title="PNL and balance")
  template(#body)
    .table
      .table__top
        .table__row
          .table__col-name PNL
          .table__col
            VValue(:value="12311.093" styles="bold")
          .table__col
            VBtn(text="Clear stats" @click="clearStats")
          .table__col
            VValue(value="Done" color="gray")
        .table__row
          .table__col-name Postition
          .table__col
            VValue(:value="-12.234")
          .table__col
            VBtn(text="Kill" color="red" @click="killHandler")
          .table__col
            VValue(value="Killed" color="gray")
        .table__row
          .table__col-name Bid amount
          .table__col
            VInput(v-model="bidAmount" max-width="48px")
          .table__col
            VBtn(text="Ok" color="green" @click="okHandler")
          .table__col
            VValue(value="Saved" color="gray")
      .table__bottom
        .table__col-name Midprice
        .table__result
          VValue(value="23434.23")
          .divider
          VValue(value="0.43934 BTC")
          .divider
          VValue(value="12032.43 USDT")
</template>

<style lang="scss" scoped>
.table {
  font-size: 14px;
  line-height: 21px;

  &__top {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--black-10);
  }

  &__bottom {
    padding-top: 16px;
  }

  &__bottom {
    display: grid;
    align-items: center;
    grid-template-columns: 25% auto;
    gap: 30px;
  }

  &__row {
    display: grid;
    align-items: center;
    grid-template-columns: 25% 15% minmax(100px, 15%) auto;
    gap: 30px;
  }

  &__row + &__row {
    margin-top: 14px;
  }

  &__col-name {
    color: var(--c-label);
  }

  &__result {
    display: flex;
    align-items: center;
  }
}
</style>
