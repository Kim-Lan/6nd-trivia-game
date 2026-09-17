<template>
  <UContainer>
    <Transition
      name="fade"
      mode="out-in"
    >
      <Question
        v-if="!gameFinished"
        :key=currentIndex
        v-bind="questions[currentIndex]"
        @increase-score="increaseScore"
        @next-question="nextQuestion"
      />
      <Results
        v-else
        :score
        :total="questions.length"
      />
    </Transition>
  </UContainer>
</template>

<script lang="ts" setup>
import questions from '~/assets/questions.json';

const currentIndex = ref(0);
const score = ref(0);
const gameFinished = ref(false);

function increaseScore(): void {
  score.value++;
}

function nextQuestion(): void {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++;
  } else {
    gameFinished.value = true;
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
