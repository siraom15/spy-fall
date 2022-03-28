<script>
import TwoColorText from '@/components/TwoColorText.vue';
import JoinGameForm from '@/components/JoinGameForm.vue';
import BackButton from '@/components/BackButton.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref } from '@vue/reactivity';
export default {
  name: 'JoinGame',
  setup() {},
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
    failed_join_room: function (data) {
      alert(data.msg);
    },
    updated_play_time: function (data) {
      this.$store.dispatch('setRoomSetting', {
        playTime: data.playTime,
      });
    },
  },
  methods: {
    join_room() {
      if (!this.$store.state.Server.serverStatus) {
        alert(this.$t('serverError'));
        return;
      }
      this.$socket.emit('join_room', {
        roomId: this.roomId,
        player: this.$store.state.Player,
      });
    },
  },
  beforeMount() {
    if(!this.$store.state.Player.name) {
      this.$router.push('/set-name');
    }
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          :left="$t('join')"
          :right="` ` + $t('game')"
          class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <form
          @submit.prevent="join_room"
          class="flex flex-col justify-center gap-2 sm:flex-col md:flex-row lg:flex-row"
        >
          <input
            type="text"
            :placeholder="$t('inputRoomId')"
            class="hover:bg-blue-light h-auto w-auto rounded border-b-4 border-yellow-400 bg-yellow-300  text-red-600 placeholder-yellow-500 hover:border-red-600 focus:border-red-600"
            required
            v-model="roomId"
          />
          <BaseButton :text="$t('joinGame')" type="submit" />
        </form>

        <router-link to="/" class="mt-5">
          <BackButton />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
