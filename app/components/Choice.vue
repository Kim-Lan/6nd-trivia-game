<template>
  <UButton
    class="text-2xl flex justify-center w-full"
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
