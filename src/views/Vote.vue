<script>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
import VotePlayer from '@/components/VotePlayer.vue';
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
    VotePlayer,
    SignDiv,
  },
  sockets: {},
  methods: {
    leaveRoom() {
      this.$socket.emit('leave_room', {
        roomId: this.$store.state.Lobby.roomId,
      });
      this.$router.push('/');
    },
  },
  watch: {},
  beforeMount() {},
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

        <VotePlayer class="mt-2" />
        <div class="mt-5 flex gap-4">
          <BaseButton :text="$t('leaveGame')" color="red" @click="leaveRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
