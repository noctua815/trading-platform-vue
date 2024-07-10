<script setup>
import { ref, computed } from 'vue'
import OnlineIcon from '@/assets/icons/online.svg'
import OfflineIcon from '@/assets/icons/offline.svg'
import SlowConnectionIcon from '@/assets/icons/slow-connection.svg'

const status = ref('online') // online, offline, slow
const statusInfo = computed(() => {
  switch (status.value) {
    case 'online':
      return {
        text: 'Online',
        icon: OnlineIcon,
      }
    case 'offline':
      return {
        text: 'Offline',
        icon: OfflineIcon,
      }
    case 'slow':
      return {
        text: 'Slow connection',
        icon: SlowConnectionIcon,
      }
  }
})
</script>

<template lang="pug">
.status(:class="[status]")
  .status__icon
    component(:is="statusInfo.icon")
  .status__text {{ statusInfo.text }}
</template>

<style lang="scss" scoped>
.status {
  display: flex;
  gap: 4px;

  &__icon {
    width: 18px;
    height: 18px;
  }

  &.online {
    color: var(--green);
  }

  &.offline {
    color: var(--red);
  }

  &.slow {
    color: var(--orange);
  }
}
</style>
