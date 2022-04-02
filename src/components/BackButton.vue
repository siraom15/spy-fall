<script>
import { ArrowSmLeftIcon, BeakerIcon } from '@heroicons/vue/solid';
export default {
  name: 'BackButton',
  components: { ArrowSmLeftIcon, BeakerIcon },
};
</script>

<template>
  <button
    class="hover:bg-blue-light hover:border-blue rounded py-2 px-4 text-white"
  >
    <div class="flex gap-1">
      <ArrowSmLeftIcon class="h-5 w-5" />
      <p class="underline">{{ $t('back') }}</p>
    </div>
  </button>
</template>
