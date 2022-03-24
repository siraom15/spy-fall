<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import random from '@/utils/random.js';
import { ref } from '@vue/reactivity';

export default {
  name: 'HostGame',
  components: {
    BaseButton,
    TwoColorText,
    PlayerLobby,
    SignDiv,
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
  },
  methods: {
    setPlayer() {},
    setRoomId(roomId) {
      console.log(this.roomId);
      this.roomId.value = roomId;
    },
  },
  beforeMount() {
    this.$socket.emit('create_room', {
      roomId: random(),
    });
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          left="HOST"
          right=" GAME"
          class="mt-5 text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <SignDiv :text="`Game Id : ${$store.state.Lobby.roomId}`" />
        <PlayerLobby class="mt-2" :players="$store.state.Lobby.players" />
        <div class="mt-5 flex gap-4">
          <router-link to="/play">
            <BaseButton text="Start Game" color="green" />
          </router-link>
          <router-link to="/">
            <BaseButton text="Leave Game" color="red" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
