<script>
import { InformationCircleIcon } from '@heroicons/vue/outline';

export default {
  name: 'ServerStatus',
  components: { InformationCircleIcon },
};
</script>

<template>
  <div v-if="!$store.state.Server.serverStatus"
    class="space-x absolute top-20 right-5 flex w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg p-4 shadow"
    :class="
      $store.state.Server.serverStatus
        ? ['bg-green-400', 'text-white']
        : ['bg-red-600', 'text-white', 'animate-pulse']
    "
    role="alert"
  >
    <div class="text-md flex gap-2 font-normal">
      <InformationCircleIcon class="h-5 w-5" />
      {{
        $store.state.Server.serverStatus
          ? $t('serverConnected')
          : $t('serverError')
      }}
    </div>
  </div>
</template>
