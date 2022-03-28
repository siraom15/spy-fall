<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'Lobby',
  data() {
    return {
      playTimeInSec: this.$store.state.Lobby.roomSetting.playTime * 60,
    };
  },
  components: {
    BaseButton,
    TwoColorText,
    PlayerLobby,
    SignDiv,
  },
  sockets: {
    randomed_role: function (data) {
      console.log(data);
      this.$store.dispatch('setLocation', data.location);
      this.$store.dispatch('setRole', data.role.name);
    },
    update_player_room: function (data) {
      console.log(data);
      this.$store.dispatch('setPlayers', data.players);
    },
    left_room: function (data) {
      console.log(data);
    },
  },
  methods: {
    leaveRoom() {
      this.$socket.emit('leave_room', {
        roomId: this.$store.state.Lobby.roomId,
      });
      this.$router.push('/');
    },
  },
  watch: {
    playTimeInSec: {
      handler(newPlayTimeInSec) {
        if (newPlayTimeInSec > 0) {
          setTimeout(() => {
            this.playTimeInSec--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  beforeMount() {
    if(this.$store.state.Lobby.roomId === '') {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
        <SignDiv :text="`${$t('gameId')} : ${$store.state.Lobby.roomId}`" />

        <SignDiv
          :text="`${$t('timeLeft')} :  ${playTimeInSec}`"
          class="text-base sm:text-xl md:text-xl lg:text-2xl"
        />
        <img
          src="/assets/images/spy.png"
          alt=""
          srcset=""
          class="w-36 sm:w-40 md:w-40 lg:w-48"
        />
        <TwoColorText
          :left="`${$t('yourRole')} : `"
          :right="$t($store.state.Game.role)"
          class="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
        />
        <TwoColorText
          :left="`${$t('yourLocation')} : `"
          :right="$t($store.state.Game.location)"
          class="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
        />
        <PlayerLobby class="mt-2" :players="$store.state.Lobby.players" />
        <div class="mt-5 flex gap-4">
          <BaseButton :text="$t('leaveGame')" color="red" @click="leaveRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
