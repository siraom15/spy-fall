<script setup>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex flex-col justify-center items-center">
        <img
          src="/assets/images/spy.png"
          alt=""
          srcset=""
          class="sm:w-20 md:w-24 lg:w-28 w-20"
        />
        <TwoColorText
          left="SPY"
          right="FALL"
          class="text-3xl sm:text-5xl md:text-5xl lg:text-7xl mt-5"
        />

        <div class="mt-5 flex gap-4">
          <router-link to="join-game">
            <BaseButton text="Join Game" />
          </router-link>
          <router-link to="host-game">
            <BaseButton text="Host Game" color="yellow" />
          </router-link>
        </div>
        <router-link to="how-to-play">
          <div
            class="font-bungee hover:bg-blue-light mt-5 text-white py-2 px-4 rounded flex"
          >
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="px-2 underline">HOW TO PLAY</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
