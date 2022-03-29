<script>
import SignDiv from '@/components/SignDiv.vue';
import SmallBaseButton from '@/components/SmallBaseButton.vue';

export default {
  name: 'VotePlayer',
  components: { SignDiv, SmallBaseButton },
  data() {
    return {
      players: this.$store.state.Lobby.players,
    };
  },
  methods: {
    vote(socketId) {
      alert('ยังไม่ได้ทำ');
      this.$socket.emit('vote', {
        roomId: this.$store.state.Lobby.roomId,
        socketId: socketId,
      });
    },
  },
};
</script>

<template>
  <div class="mx-auto max-w-2xl text-xs sm:text-xs md:text-base lg:text-lg">
    <div
      class="hover:bg-blue-light max-w-md border-b-4 border-yellow-400 bg-yellow-300 p-10 py-2 px-4"
    >
      <div class="mb-4 flex items-center justify-between">
        <h3 class="leading-none text-gray-900">{{ $t('playerInLobby') }}</h3>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-yellow-400">
          <li class="py-3 px-2" v-for="(player, index) in players" :key="index">
            <div class="flex items-center space-x-4">
              <div class="flex min-w-0 flex-1 justify-between">
                <span
                  class="flex justify-between truncate text-left text-gray-900"
                >
                  {{ index + 1 }} : {{ player.name }}
                </span>
                <SmallBaseButton text="vote" @click="vote" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
