<template>
  <UContainer
    class="flex flex-col items-center"
  >
    <UCard
      title="your 6nd trivia results"
      description="pp! thank you for playing"
      class="text-center mx-8 my-12 lg:my-16"
      :ui="{
        title: 'text-2xl text-blue-950 dark:text-blue-200',
        description: 'text-lg'
      }"
    >
      <h2 class="font-bold text-4xl text-secondary-500">
        {{ Math.round((score / total) * 100) }}%
      </h2>

      <template #footer>
        <h3 class="font-bold text-2xl text-blue-950 dark:text-blue-200">
          <span class="text-green-500">{{ score }} correct</span> / {{ total }}
        </h3>
      </template>
    </UCard>

    <UButton
      class="w-fit text-lg"
      color="secondary"
      @click="$emit('playAgain')"
    >
      play again
    </UButton>
  </UContainer>
</template>

<script lang="ts" setup>
defineProps<{
  score: number;
  total: number;
}>();

defineEmits<{
  (e: 'playAgain'): void;
}>();
</script>

<style>
</style>
