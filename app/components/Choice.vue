<template>
  <UButton
    class="text-xl justify-center"
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
