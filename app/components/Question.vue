<template>
  <UPageSection
    :title=question
    :ui="{
      container: 'py-12 sm:py-12 lg:py-16 gap-12 lg:gap-16'
    }"
  >
    <UContainer class="flex flex-col w-full gap-12 lg:max-w-3/4">
      <Choice
        v-for="(choice, index) in choices"
        :key=choice
        :text="choice"
        :index
        @choice-selected="onChoiceSelected"
      />
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

function onChoiceSelected(index: number): void {
  if (index === props.correctIndex) {
    emit('increaseScore');
  }
  emit('nextQuestion');
}
</script>
