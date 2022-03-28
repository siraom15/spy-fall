<script setup>
const props = defineProps({
  text: {
    type: [String, Number],
    default: 'Some Text',
  },
  color: {
    type: String,
    default: 'yellow',
  },
});
const bgClass = {
  red: ['bg-red-600', 'border-red-700', 'text-white'],
  yellow: ['bg-yellow-300', 'border-yellow-400', 'text-red-600'],
  green: ['bg-green-400', 'border-emerald-500', 'text-white'],
  visible: [],
};
</script>

<template>
  <div
    class="border-b-4 border-r-4 py-1 px-4 text-center  text-xs sm:text-xs md:text-xs lg:text-lg"
    :class="[bgClass[props.color]]"
  >
    <span>{{ props.text }}</span>
  </div>
</template>
