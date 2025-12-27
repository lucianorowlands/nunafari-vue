<template>
  <section class="text-center py-20">
    <h1 class="font-poppins text-[4rem] font-extrabold text-[#21A51F]">
      {{ $t('home.hero.title') }}
    </h1>

    <p class="text-2xl text-gray-700 mt-4 italic">
      {{ $t('home.hero.slogan') }}
    </p>

    <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
      {{ $t('home.hero.subtitle-part-1') }}
    </p>
    <p class="text-lg text-gray-600 mt-1 max-w-2xl mx-auto">
      {{ $t('home.hero.subtitle-part-2') }}
    </p>
    <p class="text-lg text-gray-600 mt-1 max-w-2xl mx-auto">
      {{ $t('home.hero.subtitle-part-3') }}
    </p>

    <div class="mt-8">
      <router-link
        to="/about"
        class="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg shadow-md hover:bg-green-600 transition"
      >
        {{ $t('home.hero.call-to-action') }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
// Sem script adicional por enquanto, só usando i18n via $t
</script>

<style scoped>
/* Se quiser, pode colocar estilos locais aqui, mas o Tailwind já cobre quase tudo */
</style>
