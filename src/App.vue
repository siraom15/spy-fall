<script>
import ChangeLang from '@/components/ChangeLang.vue';
import ServerStatus from '@/components/ServerStatus.vue';
export default {
  name: 'App',
  components: {
    ChangeLang,
    ServerStatus,
  },
  sockets: {
    connection: function (data) {
      this.$store.dispatch('setSocketId', data.socketId);
      this.$store.dispatch('setServerStatus', true);
    },
    disconnect: function () {
      this.$store.dispatch('setServerStatus', false);
    },
  },
};
</script>

<template>
  <div class="font-bungee">
    <main>
      <!-- <div class="text-white">
        {{ $store.state }}
      </div> -->
      <ServerStatus />
      <ChangeLang />
      <router-view />
    </main>
  </div>
</template>
