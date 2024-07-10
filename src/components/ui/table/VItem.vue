<script setup>
import {reactive, ref, computed} from 'vue'
import VPercent                  from '@ui/table/VPercent.vue'
import VValue                    from '@ui/table/VValue.vue'
import VBtn                      from '@ui/VButton.vue'

const props = defineProps({
  data: Array
})

const vDynamicEvents = {
  mounted(el, binding, vnode, prevVnode) {
    const allEvents = binding.value

    if (allEvents) {
      allEvents.forEach((event) => {
        binding.instance.$on(event, (eventData) => {
          // binding
          console.log('fired??')
        })
      })
    }
  },
  // created(el, binding, vnode, prevVnode) {
  //   console.log('created', el, binding, vnode, prevVnode)
  //   const allEvents = binding.value
  //   // if (allEvents) {
  //   //   allEvents.forEach((event) => {
  //   //     console.log('start for ', event)
  //   //     // register handler in the dynamic component
  //   //     vnode.componentInstance.$on(event, (eventData) => {
  //   //       // when the event is fired, the proxyEvent function is going to be called
  //   //       vnode.context.proxyEvent(event, eventData);
  //   //     });
  //   //   });
  //   // }
  // }
}

const getComponent = (type) => {
  switch (type) {
    case 'percent':
      return VPercent
    case 'btn':
      return VBtn
    case 'number':
      return VValue
    case 'string':
      return VValue
    default:
      return 'div'
  }
}
const kill = (item) => {
  console.log('kill emit', item)
}

const click = (item) => {
  console.log('click emit', item)
}
</script>

<template lang="pug">
.item
  .item__wr.table-8-col
    .item__col(v-for="(item, i) of data" :key="i")
      component(:is="getComponent(item.type)"
        :value="item.value"
        v-bind="item.props"
        v-dynamic-events="item.events"
      )
</template>

<style lang="scss" scoped>
.item {
  margin-bottom: 6px;
  border-radius: 8px;
  background-color: var(--white);

  &__wr {
    padding: 9px 10px;
  }
}
</style>
