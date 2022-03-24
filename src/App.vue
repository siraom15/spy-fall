<script>
export default {
  name: 'App',
  sockets: {
    connection: function (data) {
      console.log(data);
      this.$store.dispatch('setSocketId', data.socketId);
    },
  },
};
</script>

<template>
  <div>
    <main>
      <div class="text-white">
        {{ $tc('message.hello') }}
        {{ $store.state }}
      </div>
      <router-view />
    </main>
  </div>
</template>
