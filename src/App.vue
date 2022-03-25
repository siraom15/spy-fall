<script>
import ChangeLang from '@/components/ChangeLang.vue'
export default {
  name: 'App',
  components:{
    ChangeLang
  },
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
      <!-- <div class="text-white">
        {{ $store.state }}
      </div> -->
      <ChangeLang />
      <router-view />
    </main>
  </div>
</template>
