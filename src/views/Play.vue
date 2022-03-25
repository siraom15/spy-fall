<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'Lobby',
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
  },
  methods: {},
  beforeMount() {},
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          left="YOUR ROLE : "
          :right="$store.state.Game.role"
          class="mt-5 text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />
        <TwoColorText
          left="YOUR Location : "
          :right="$store.state.Game.location"
          class="mt-5 text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <!-- <SignDiv :text="`Game Id : ${$store.state.Lobby.roomId}`" /> -->
        <!-- <PlayerLobby class="mt-2" :players="$store.state.Lobby.players" /> -->
        <div class="mt-5 flex gap-4">
          <BaseButton :text="$t('leaveGame')" color="red" @click="leaveRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
