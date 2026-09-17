<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
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
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <UApp class="max-h-screen">
    <UHeader class="max-h-[64px]">
      <template #left>
        <NuxtLink
          to="/"
          class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
        >
          <h1 class="font-bold text-xl md:text-2xl">camkatsu's 6nd trivia !</h1>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/Kim-Lan/6nd-trivia-game"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain class="flex flex-col mx-auto min-h-[var(--ui-main-height)] max-h-fit">
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter class="max-h-[64px]">
      <template #left>
        <p class="text-sm text-muted">
          Developed by Kim-Lan • © All Rights Reserved.
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/Kim-Lan/6nd-trivia-game"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
