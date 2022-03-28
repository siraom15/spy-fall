<script setup>
const props = defineProps({
  left: {
    type: String,
  },
  right: {
    type: String,
  },
});
</script>

<template>
  <div class="text-2xl " >
    <span class="text-yellow-300"> {{ left }} </span>
    <span class="text-red-600"> {{ right }} </span>
  </div>
</template>
