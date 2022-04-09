<script>
import BaseButton from './BaseButton.vue';
import { InformationCircleIcon } from '@heroicons/vue/solid';
export default {
  name: 'LocationListModal',
  emits: ['closeLocationList'],
  components: {
    BaseButton,
    InformationCircleIcon,
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
      hiddenLocationIndexes: [],
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
    toggleLocation(index) {
      if (this.hiddenLocationIndexes.includes(index)) {
        console.log('show' + index);
        this.hiddenLocationIndexes.splice(
          this.hiddenLocationIndexes.indexOf(index),
          1
        );
      } else {
        console.log('hide' + index);
        this.hiddenLocationIndexes.push(index);
      }
    },
  },
  computed: {},
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
              <p class="mb-2 text-center text-lg">{{ $t('locationList') }}</p>
              <p class="mb-2 flex items-center gap-2 text-xs">
                <InformationCircleIcon class="w-5" />{{ $t('clickToHide') }}
              </p>
              <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div
                  class="content-center border-2 p-2 text-center text-xs"
                  v-for="(location, index) in locations"
                  @click="toggleLocation(index)"
                  :class="
                    !hiddenLocationIndexes.includes(index)
                      ? 'border-red-500 bg-red-500 text-white'
                      : 'border-red-400 bg-yellow-300 text-red-400'
                  "
                  :key="index"
                >
                  <p>{{ $t(location.location) }}</p>
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
