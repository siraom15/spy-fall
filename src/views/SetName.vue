<script>
import TwoColorText from '@/components/TwoColorText.vue';
import JoinGameForm from '@/components/JoinGameForm.vue';
import BackButton from '@/components/BackButton.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref } from '@vue/reactivity';
export default {
  name: 'SetName',
  setup() {},
  data() {
    return {
      name: ref(''),
    };
  },
  components: { TwoColorText, JoinGameForm, BackButton, BaseButton },
  sockets: {
  },
  methods: {
      set_name: function() {
        this.$store.dispatch('setName', this.name);
        this.$router.go(-1);
      },
  },
  beforeMount() {
  },
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div>
      <div class="flex flex-col items-center justify-center">
        <TwoColorText
          :left="$t('set')"
          :right="` ` + $t('name')"
          class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
        />

        <form
          @submit.prevent="set_name"
          class="flex flex-col justify-center gap-2 sm:flex-col md:flex-row lg:flex-row"
        >
          <input
            type="text"
            :placeholder="$t('inputName')"
            class="hover:bg-blue-light h-auto w-auto rounded border-b-4 border-yellow-400 bg-yellow-300 font-bungee text-red-600 placeholder-yellow-500 hover:border-red-600 focus:border-red-600"
            required
            v-model="name"
          />
          <BaseButton :text="$t('next')" type="submit" />
        </form>

        <router-link to="/" class="mt-5">
          <BackButton />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
