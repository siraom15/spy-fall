<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import PlayerLobby from '@/components/PlayerLobby.vue';
import SignDiv from '@/components/SignDiv.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'Vote',
  data() {
    return {};
  },
  components: {
    BaseButton,
    TwoColorText,
    PlayerLobby,
    SignDiv,
  },
  sockets: {},
  methods: {},
  watch: {},
  beforeMount() {
      
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div
        class="flex flex-col items-center justify-center gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4"
      >
        <SignDiv :text="`${$t('gameId')} : ${$store.state.Lobby.roomId}`" />

        <SignDiv
          :text="`${$t('vote')}`"
          class="text-base sm:text-xl md:text-xl lg:text-2xl"
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
