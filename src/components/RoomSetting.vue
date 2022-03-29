<script>
import SignDiv from '@/components/SignDiv.vue';
import BaseButton from '@/components/BaseButton.vue';
import SmallBaseButton from '@/components/SmallBaseButton.vue';

export default {
  name: 'RoomSetting',
  data() {
    return {
      playTime: this.$store.state.Lobby.roomSetting.playTime,
    };
  },
  props: {
    isHost: {
      type: Boolean,
      default: true,
    },
  },
  components: { SignDiv, BaseButton, SmallBaseButton },
  watch: {
    playTime(newPlayTime) {
      this.playTime = newPlayTime < 1 ? 1 : newPlayTime > 15 ? 15 : newPlayTime;
      this.$store.dispatch('setRoomSetting', {
        playTime: newPlayTime,
      });
      this.update_play_time();
    },
    sockets: {},
  },
  methods: {
    update_play_time: function () {
      this.$socket.emit('update_play_time', {
        roomId: this.$store.state.Lobby.roomId,
        playTime: this.$store.state.Lobby.roomSetting.playTime,
      });
    },
  },
};
</script>

<template>
  <div class="mx-auto max-w-2xl text-xs sm:text-xs md:text-base lg:text-lg">
    <div
      class="hover:bg-blue-light max-w-md border-b-4 border-yellow-400 bg-yellow-300 p-10 py-2 px-4 "
    >
      <div class="mb-4 flex items-center justify-between">
        <h3 class="leading-none text-gray-900">{{ $t('roomSettings') }}</h3>
      </div>
      <div class="flow-root">
        <div class="divide-y divide-yellow-400">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <sign-div :text="$t('time')" />
              <SmallBaseButton
                text="-"
                @click="playTime--"
                class="w-2"
                :class="{ hidden: !isHost }"
              />
              <sign-div :text="$store.state.Lobby.roomSetting.playTime" />
              <SmallBaseButton
                text="+"
                @click="playTime++"
                class="w-2"
                :class="{ hidden: !isHost }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
