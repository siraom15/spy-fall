<script>
import { GlobeAltIcon } from '@heroicons/vue/outline';
export default {
  name: 'ChangeLang',
  components: { GlobeAltIcon },
  data() {
    return { langs: ['en', 'th'] };
  },
};
</script>
<template>
  <div class="flex items-center justify-end bg-red-600 text-right text-white">
    <GlobeAltIcon class="h-5 w-5" />
    <select
      v-model="$i18n.locale"
      class="border-0 bg-red-600 p-2 hover:bg-yellow-300 hover:text-red-600 focus:border-0"
    >
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    <a
      href="https://github.com/siraom15"
      target="_blank"
      class="p-4 text-sm hover:bg-yellow-300 hover:text-red-600"
      >Github</a
    >
  </div>
</template>
