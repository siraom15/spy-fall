<script>
import TwoColorText from '@/components/TwoColorText.vue';
import JoinGameForm from '@/components/JoinGameForm.vue';
import BackButton from '@/components/BackButton.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'JoinGame',
  data() {
    return {
      roomId: ref(''),
    };
  },
  components: { TwoColorText, JoinGameForm, BackButton, BaseButton },
  sockets: {
    joined_room: function (data) {
      console.log(data);
      this.$store.dispatch('setRoomId', data.roomId);
      this.$store.dispatch('setPlayers', data.players);
      this.$router.push('/lobby');
    },
    update_player_room: function (data) {
      console.log(data);
    },
  },
  methods: {
    join_room() {
      this.$socket.emit('join_room', {
        roomId: this.roomId,
      });
    },
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          left="JOIN"
          right=" GAME"
          class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <form
          @submit.prevent
          class="flex flex-col justify-center gap-2 sm:flex-col md:flex-row lg:flex-row"
        >
          <input
            type="text"
            placeholder="Input Room Id"
            class="hover:bg-blue-light h-auto w-auto rounded border-b-4 border-yellow-400 bg-yellow-300 font-bungee text-red-600 placeholder-yellow-500 hover:border-red-600 focus:border-red-600"
            required
            v-model="roomId"
          />
          <BaseButton text="Join Game" @click="join_room" />
        </form>

        <router-link to="/" class="mt-5">
          <BackButton />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
