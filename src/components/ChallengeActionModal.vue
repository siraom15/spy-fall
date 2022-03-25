<script setup>
import BaseButton from '../components/BaseButton.vue';
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  actionDetail: {
    type: String,
    default: 'Action Action',
  },
});

</script>
<template>
  <div>
    <div
      class="fixed z-10 inset-0 overflow-y-auto font-bungee"
      role="dialog"
      :hidden="isShow"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
        ></div>

        <span class="hidden sm:inline-block sm:align-bottom sm:h-screen"
          >&#8203;</span
        >

        <div
          class="relative inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-yellow-300 py-1 px-4 border-b-8 border-r-8 border-yellow-400 text-xs sm:text-xs md:text-base lg:text-lg"
        >
          <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 font-bold"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-red-600">
                  {{ actionDetail }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-slate-100">
                    Are you want to challenge this action ?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-1 justify-center mb-2">
            <BaseButton text="Challenge" />
            <BaseButton text="Pass" color="green" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
