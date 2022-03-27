<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import RoomSetting from '@/components/RoomSetting.vue';
import random from '@/utils/random.js';
import { ref } from '@vue/reactivity';

export default {
  name: 'HostGame',
  components: {
    BaseButton,
    TwoColorText,
    PlayerLobby,
    SignDiv,
    RoomSetting,
  },
  sockets: {
    created_room: function (data) {
      console.log(data);
      this.$store.dispatch('setRoomId', data.roomId);
      this.$store.dispatch('setPlayers', data.players);
    },
    update_player_room: function (data) {
      console.log(data);
      this.$store.dispatch('setPlayers', data.players);
    },
    started_game: function (data) {
      console.log(data);
      this.$router.push('/play');
    },
  },
  methods: {
    start_game: function () {
      if (!this.$store.state.Server.serverStatus) {
        alert(this.$t('serverError'));
        return;
      }
      console.log('send start_game');
      this.$socket.emit('start_game', {
        roomId: this.$store.state.Lobby.roomId,
      });
    },
    delete_game: function () {
      console.log(`send end game`);
      this.$socket.emit('delete_game', {
        roomId: this.$store.state.Lobby.roomId,
      });
      this.$router.push('/');
    },
    update_play_time: function () {
      this.$socket.emit('update_play_time', {
        roomId: this.$store.state.Lobby.roomId,
        playTime:  this.$store.state.Lobby.roomSetting.playTime,
      });
    },
  },
  beforeMount() {
    this.$socket.emit('create_room', {
      roomId: random(),
      player: this.$store.state.Player,
    });
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          :left="$t('host')"
          :right="` ` + $t('game')"
          class="mt-5 text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <SignDiv :text="`${$t('gameId')} : ${$store.state.Lobby.roomId}`" />
        <RoomSetting class="mt-2" />
        <PlayerLobby class="mt-2" :players="$store.state.Lobby.players" />
        <!-- <BaseButton text="Show Setting" color="red" /> -->
        <div class="mt-5 flex gap-4">
          <BaseButton
            :text="$t('startGame')"
            color="green"
            @click="start_game"
          />
          <BaseButton
            :text="$t('leaveGame')"
            color="red"
            @click="delete_game"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
