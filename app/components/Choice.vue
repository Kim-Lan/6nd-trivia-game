<template>
  <UButton
    class="text-2xl flex justify-center w-full text-sky-50 dark:text-sky-950"
    @click="$emit('choiceSelected', index)"
  >
    {{ text }}
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
  index: number;
}>();

defineEmits<{
  (e: 'choiceSelected', index: number): void;
}>();
</script>

<style>
</style>
