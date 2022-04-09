<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'LocationListModal',
  emits: ['closeLocationList'],
  components: {
    BaseButton,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    async getLocations() {
      let data = await fetch(
        import.meta.env.VITE_SERVER_URL + '/api/locations'
      );
      let result = await data.json();
      this.locations = result;
    },
  },
  async beforeMount() {
    await this.getLocations();
  },
};
</script>

<template>
  <div
    class="fixed inset-0 z-10 overflow-y-auto font-bungee"
    role="dialog"
    :hidden="!isShow"
  >
    <div
      class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
      ></div>

      <span class="hidden sm:inline-block sm:h-screen sm:align-bottom"
        >&#8203;</span
      >

      <div
        class="relative inline-block transform overflow-hidden rounded-lg border-b-8 border-r-8 border-yellow-400 bg-yellow-300 py-1 px-4 text-left align-bottom text-xs shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
      >
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <p class="text-base mb-2">{{ $t('locationList') }}</p>
              <p class="text-xs mb-2">{{ $t('clickToHide') }}</p>
              <div class="grid grid-cols-3 gap-5">
                <div
                  class="border-2 border-red-400 p-4 text-center text-xs hover:bg-red-500 hover:text-white"
                  v-for="(location, index) in locations"
                  :key="index"
                >
                  {{ $t(location.location) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-2 flex justify-center gap-1">
          <BaseButton :text="$t('close')" @click="$emit('closeLocationList')" />
        </div>
      </div>
    </div>
  </div>
</template>
