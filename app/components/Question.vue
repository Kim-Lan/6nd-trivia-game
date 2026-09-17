<template>
  <UPageSection
    :title=question
  >
    <Choice
      v-for="(choice, index) in choices"
      :key=choice
      :text="choice"
      :index
      @choice-selected="onChoiceSelected"
    />
  </UPageSection>
</template>

<script lang="ts" setup>
const props = defineProps<{
  question: string;
  choices: string[];
  correctIndex: number;
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
