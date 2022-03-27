<script setup>
import BaseButton from '@/components/BaseButton.vue';
import TwoColorText from '@/components/TwoColorText.vue';
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex flex-col justify-center items-center">
       
        <TwoColorText
          :left="$t('pageNotFound')"
          class="text-3xl sm:text-5xl md:text-5xl lg:text-7xl mt-5"
        />
        <div class="mt-5 flex gap-4">
          <router-link to="/">
            <BaseButton :text="$t('goToHome')" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
