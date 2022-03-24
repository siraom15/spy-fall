<script>
export default {
  name: 'App',
  sockets: {
    connection: function (data) {
      console.log(data);
      this.$store.dispatch('setSocketId', data.socketId)
    },
  },
};
</script>

<template>
  <div>
    <main>
      <div class="text-white">
      {{$store.state}}
      </div>
      <router-view />
    </main>
  </div>
</template>
