<script>
import ChangeLang from '@/components/ChangeLang.vue';
import ServerStatus from '@/components/ServerStatus.vue';
export default {
  name: 'App',
  data() {
    return {
      serverStatus: false,
    };
  },
  components: {
    ChangeLang,
    ServerStatus,
  },
  sockets: {
    connection: function (data) {
      console.log(data);
      this.$store.dispatch('setSocketId', data.socketId);
      this.serverStatus = true;
    },
  },
};
</script>

<template>
  <div>
    <main>
      <div class="text-white">
        {{ $store.state }}
      </div>
      <ServerStatus :serverStatus="serverStatus" />
      <ChangeLang />
      <router-view />
    </main>
  </div>
</template>
