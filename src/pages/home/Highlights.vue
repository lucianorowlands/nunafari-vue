<template>
  <section class="py-16 bg-white text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">
      {{ $t('home.highlights.title') }}
    </h2>

    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <div
        v-for="item in highlights"
        :key="item.id"
        class="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold text-green-700 mb-2">{{ item.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ item.summary }}</p>
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          class="text-green-600 hover:underline text-sm"
        >
          {{ $t('home.highlights.readMore') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// usando o I18n
const { locale } = useI18n()

// import dinâmico simples
const highlights = ref([])

import(`../../data/highlights/${locale.value}.json`).then((m) => {
  highlights.value = m.default
})
</script>
