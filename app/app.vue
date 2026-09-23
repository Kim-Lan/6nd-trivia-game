<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: './sprout.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});

const title = 'camkatsu\'s 6nd trivia !';
const description = 'a short trivia game about camkatsu to celebrate his 6nd stream anniversary';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://kim-lan.github.io/camkatsu-6nd-trivia/screenshot.png',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <UApp class="max-h-screen">
    <UHeader
      class="max-h-[var(--ui-header-height)]"
      :ui="{
        toggle: 'hidden'
      }"
    >
      <template #left>
        <NuxtLink
          to="/"
          class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
        >
          <h1 class="font-bold text-xl md:text-2xl">camkatsu's 6nd trivia !</h1>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton class="text-sky-300 dark:text-sky-700" />

        <UButton
          to="https://github.com/Kim-Lan/camkatsu-6nd-trivia"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          variant="ghost"
          class="text-sky-300 dark:text-sky-700 hidden md:block"
        />
      </template>
    </UHeader>

    <UMain class="flex flex-col mx-auto min-h-[var(--ui-main-height)] max-h-fit">
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter class="max-h-[var(--ui-header-height)]">
      <template #left>
        <p class="text-sm">
          developed by kim-lan, questions written by kim-lan and suite • © all rights reserved
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/Kim-Lan/camkatsu-6nd-trivia"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          variant="ghost"
          class="text-sky-300 dark:text-sky-700"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<style>
body {
  background-color: var(--color-sky-100);
}

.dark body {
  background-color: var(--color-blue-950);
}
</style>
