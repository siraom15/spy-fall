<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import RoomSetting from '@/components/RoomSetting.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'Lobby',
  components: {
    BaseButton,
    TwoColorText,
    PlayerLobby,
    SignDiv,
    RoomSetting,
  },
  sockets: {
    update_player_room: function (data) {
      console.log(data);
      this.$store.dispatch('setPlayers', data.players);
    },
    left_room: function (data) {
      console.log(data);
    },
    started_game: function (data) {
      console.log(data);
      this.$router.push('/play');
    },
    updated_play_time: function (data) {
      console.log(data);
      this.$store.dispatch('setRoomSetting', {
        playTime: data.playTime,
      });
    },
    deleted_game: function (data) {
      console.log(data);
      alert(this.$t('hostDeletedGame'))
      this.$router.push('/');
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
  beforeMount() {
    if(this.$store.state.Lobby.roomId === null) {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          left="LOB"
          right="BY"
          class="mt-5 text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <SignDiv :text="`${$t('gameId')} : ${$store.state.Lobby.roomId}`" />
        <RoomSetting class="mt-2" :isHost="false" />
        <PlayerLobby class="mt-2" :players="$store.state.Lobby.players" />
        <div class="mt-5 flex gap-4">
          <BaseButton :text="$t('leaveGame')" color="red" @click="leaveRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
