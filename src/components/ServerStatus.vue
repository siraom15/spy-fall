<script>
export default {
  name: 'ServerStatus',
};
</script>

<template>
  <div
    class="space-x absolute top-20 right-5 flex w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg p-4 shadow"
    :class="
      $store.state.Server.serverStatus
        ? ['bg-green-400', 'text-white']
        : ['bg-red-600', 'text-white', 'animate-pulse']
    "
    role="alert"
  >
    <div class="text-md flex gap-2  font-normal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {{
        $store.state.Server.serverStatus
          ? $t('serverConnected')
          : $t('serverError')
      }}
    </div>
  </div>
</template>
