<script>
const btnClass = {
  red: [
    'bg-red-600',
    'border-red-700',
    'hover:bg-red-800',
    'hover:border-red-900',
    'disabled:bg-red-400',
    'disabled:border-red-500',
  ],
  yellow: [
    'bg-yellow-300',
    'border-yellow-400',
    'hover:bg-yellow-400',
    'hover:border-yellow-500',
    'disabled:bg-yellow-200',
    'disabled:border-yellow-300',
  ],
  green: [
    'bg-green-400',
    'border-emerald-500 ',
    'hover:bg-green-500',
    'hover:border-emerald-600',
    'disabled:bg-green-300',
    'disabled:border-emerald-400',
  ],
  visible: [],
};
export default {
  name: 'BaseButton',
  data(){
    return{
      btnClass
    }
  },
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'red',
    },
  },
};
</script>

<template>
  <button
    class="w-24 rounded border-b-4 border-r-4 py-2 px-4 text-xs text-white shadow-sm shadow-slate-700 sm:w-24 sm:text-xs md:w-32 md:text-xs lg:w-44 lg:text-base xl:w-44 xl:text-lg"
    :class="[btnClass[color]]"
  >
    {{ text }}
  </button>
</template>
