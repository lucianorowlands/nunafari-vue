<template>
  <main class="about-page main-content max-w-4xl mx-auto px-4 py-8">
    <!-- título principal -->
    <h1 class="text-3xl font-bold mb-8">
      {{ t('about.main.title') }}
    </h1>

    <!-- seção 1 -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        {{ t('about.main.title-section-1') }}
      </h2>
      <div class="prose prose-blue prose-lg max-w-none space-y-4">
        <p v-html="t('about.main.p-s1-1')"></p>
        <p v-html="t('about.main.p-s1-2')"></p>
        <p v-html="t('about.main.p-s1-3')"></p>
      </div>
    </section>

    <!-- seção 2 -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        {{ t('about.main.title-section-2') }}
      </h2>
      <div class="prose prose-lg space-y-4">
        <p v-html="t('about.main.p-s2-1')"></p>
        <p v-html="t('about.main.p-s2-2')"></p>
        <p v-html="t('about.main.p-s2-3')"></p>
      </div>
    </section>

    <!-- seção 3 -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        {{ t('about.main.title-section-3') }}
      </h2>
      <div class="prose prose-lg space-y-4">
        <p v-html="t('about.main.p-s3-1')"></p>
        <p v-html="t('about.main.p-s3-2')"></p>
      </div>
    </section>

    <!-- seção 4 -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">
        {{ t('about.main.title-section-4') }}
      </h2>
      <div class="prose prose-lg space-y-4">
        <p v-html="t('about.main.p-s4-1')"></p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* estilos adicionais se precisar */
</style>
