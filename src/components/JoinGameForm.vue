<script>
import BaseButton from './BaseButton.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'JoinGameForm',
  components: { BaseButton },
  data() {
    return {
      roomId: ref(''),
    };
  },
  emits: ['join_room']
};
</script>

<template>
  <form
    class="flex flex-col justify-center gap-2 sm:flex-col md:flex-row lg:flex-row"
  >
    <input
      type="text"
      placeholder="Input Room Id"
      class="hover:bg-blue-light h-auto w-auto rounded border-b-4 border-yellow-400 bg-yellow-300  text-red-600 placeholder-yellow-500 hover:border-red-600 focus:border-red-600"
      required
      v-model="roomId"
    />
    <BaseButton :text="$t('joinGame')" @click="$emit('join_room', roomId)" />
  </form>
</template>
