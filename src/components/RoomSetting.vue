<script>
import SignDiv from '@/components/SignDiv.vue';
import BaseButton from '@/components/BaseButton.vue';
import SmallBaseButton from '@/components/SmallBaseButton.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'RoomSetting',
  data() {
    return {
      playTime: 5,
    };
  },
  components: { SignDiv, BaseButton, SmallBaseButton },
  props: {},
  watch: {
    playTime(newPlayTime) {
      if (newPlayTime < 1) {
        newPlayTime = 1;
      }
      if (newPlayTime > 15) {
        newPlayTime = 15;
      }
      this.playTime = newPlayTime < 1 ? 1 : newPlayTime > 15 ? 15 : newPlayTime;
      this.$store.dispatch('setRoomSetting', {
        playTime: newPlayTime,
      });
    },
    sockets:{

    }
  },
};
</script>

<template>
  <div class="mx-auto max-w-2xl text-xs sm:text-xs md:text-base lg:text-lg">
    <div
      class="hover:bg-blue-light max-w-md border-b-4 border-yellow-400 bg-yellow-300 p-10 py-2 px-4 font-bungee"
    >
      <div class="mb-4 flex items-center justify-between">
        <h3 class="leading-none text-gray-900">Room Settings</h3>
      </div>
      <div class="flow-root">
        <div class="divide-y divide-yellow-400">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <sign-div text="Time" />
              <SmallBaseButton text="-" @click="playTime--" class="w-2" />
              <sign-div :text="playTime" />
              <SmallBaseButton text="+" @click="playTime++" class="w-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
