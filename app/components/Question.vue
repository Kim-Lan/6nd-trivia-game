<template>
  <UPageSection
    :title=question
    :ui="{
      container: 'py-8 sm:py-8 lg:py-10 gap-8 lg:gap-12',
      title: 'text-blue-950 dark:text-blue-200'
    }"
  >
    <UContainer class="flex flex-col w-full gap-8 lg:gap-12 lg:max-w-3/4">
      <Choice
        v-for="(choice, index) in choices"
        :key=choice
        :text="choice"
        :index
        :disabled="isAnswered"
        :ui="{
          base: (index === correctIndex) ? 'disabled:opacity-100 disabled:bg-primary-500'
            : (index === selectedIndex) ? 'disabled:opacity-100 disabled:bg-neutral-500 dark:disabled:bg-neutral-400'
              : 'disabled:bg-neutral-300 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500'
        }"
        @choice-selected="onChoiceSelected"
      />
    </UContainer>

    <UContainer class="flex flex-row justify-end">
      <UButton
        color="secondary"
        trailing-icon="boxicons:arrow-big-right-filled"
        :disabled="!isAnswered"
        :class="{ hidden: !isAnswered }"
        class="text-lg"
        @click="$emit('nextQuestion')"
      >
        next
      </UButton>
    </UContainer>
  </UPageSection>
</template>

<script lang="ts" setup>
const props = defineProps<{
  question?: string;
  choices?: string[];
  correctIndex?: number;
}>();

const emit = defineEmits<{
  (e: 'increaseScore' | 'nextQuestion'): void;
}>();

const isAnswered = ref(false);
const selectedIndex = ref(-1);

function onChoiceSelected(index: number): void {
  selectedIndex.value = index;

  if (index === props.correctIndex) {
    emit('increaseScore');
  }

  isAnswered.value = true;
}
</script>
