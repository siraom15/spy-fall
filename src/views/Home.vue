<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import {InformationCircleIcon} from '@heroicons/vue/outline';
export default {
  setup() {
    
  },
  name: 'Home',
  components: {
    BaseButton,
    TwoColorText,
    InformationCircleIcon
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex flex-col justify-center items-center">
        <img
          src="/assets/images/spy.png"
          alt=""
          srcset=""
          class="sm:w-20 md:w-24 lg:w-28 w-20"
        />
        <TwoColorText
          left="SPY"
          right="FALL"
          class="text-3xl sm:text-5xl md:text-5xl lg:text-7xl mt-5"
        />

        <div class="mt-5 flex gap-4">
          <router-link to="join-game">
            <BaseButton :text="$t('joinGame')" />
          </router-link>
          <router-link to="host-game">
            <BaseButton :text="$t('hostGame')" color="yellow" />
          </router-link>
        </div>
        <router-link to="how-to-play">
          <div
            class=" hover:bg-blue-light mt-5 text-white py-2 px-4 rounded flex"
          >
            &nbsp;
            <InformationCircleIcon class="h-5 w-5"/>
            <p class="px-2 underline">{{$t('howToPlay')}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
