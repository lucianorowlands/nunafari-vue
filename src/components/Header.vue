<template>
  <header class="bg-gray-100 p-4 shadow-md flex justify-between items-center">
    <!-- Logo -->
    <router-link to="/" class="text-xl font-bold text-green-600">Nuna Fari</router-link>

    <!-- Menu principal (mantive seu código) -->
    <nav class="space-x-4 flex items-center">
      <router-link to="/" class="hover:text-green-600">{{ $t('menu-header.menu.home') }}</router-link>
      <router-link to="/nuna-vivi" class="hover:text-green-600">{{ $t('menu-header.menu.revista') }}</router-link>

      <!-- Aulas -->
      <div class="relative" @mouseleave="openMenu = null">
        <button @mouseover="openMenu = 'aulas'" class="hover:text-green-600">
          {{ $t('menu-header.menu.aulas') }}
        </button>
        <ul
          v-if="openMenu === 'aulas'"
          class="absolute left-0 mt-1 bg-white border rounded shadow-md py-1 w-48 z-10"
        >
          <li>
            <router-link to="/music-classes" class="block px-4 py-2 hover:bg-gray-100">
              {{ $t('menu-header.menu.aulasMusica') }}
            </router-link>
          </li>
          <li>
            <router-link to="/portuguese-classes" class="block px-4 py-2 hover:bg-gray-100">
              {{ $t('menu-header.menu.aulasPortugues') }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Aconselhamentos -->
      <div class="relative" @mouseleave="openMenu = null">
        <button @mouseover="openMenu = 'acons'" class="hover:text-green-600">
          {{ $t('menu-header.menu.aconselhamentos') }}
        </button>
        <ul
          v-if="openMenu === 'acons'"
          class="absolute left-0 mt-1 bg-white border rounded shadow-md py-1 w-56 z-10"
        >
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">{{ $t('menu-header.menu.aconselhamentoFilosofico') }}</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">{{ $t('menu-header.menu.mentoriaArtistica') }}</a></li>
        </ul>
      </div>

      <!-- Música -->
      <div class="relative" @mouseleave="openMenu = null">
        <button @mouseover="openMenu = 'musica'" class="hover:text-green-600">
          {{ $t('menu-header.menu.musica') }}
        </button>
        <ul
          v-if="openMenu === 'musica'"
          class="absolute left-0 mt-1 bg-white border rounded shadow-md py-1 w-48 z-10"
        >
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">{{ $t('menu-header.menu.musicaOuvir') }}</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">{{ $t('menu-header.menu.musicaPartituras') }}</a></li>
        </ul>
      </div>

      <a href="#" class="hover:text-green-600">{{ $t('menu-header.menu.servicos') }}</a>
      <router-link to="/about" class="hover:text-green-600">{{ $t('menu-header.menu.sobre') }}</router-link>
    </nav>

    <!-- Seletor de idioma (substituído) -->
    <div class="ml-4 relative" ref="langContainer">
      <!-- botão que mostra o idioma atual -->
      <button @click="toggleLangOpen" class="border rounded px-2 py-1">
        {{ currentLangUpper }}
      </button>

      <!-- dropdown mostra apenas os OUTROS idiomas -->
      <ul
        v-if="langOpen"
        class="absolute right-0 mt-1 bg-white border rounded shadow-md py-1 w-28 z-10"
      >
        <li v-for="l in otherLanguages" :key="l.code">
          <button
            @click="changeLanguage(l.code)"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {{ l.label }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// i18n
const { locale } = useI18n()

// menus
const openMenu = ref(null)

// idioma
const langOpen = ref(false)
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' }
]
const currentLang = computed(() => locale.value || 'en')
const currentLangUpper = computed(() => (currentLang.value || 'en').toUpperCase())
const otherLanguages = computed(() => languages.filter(l => l.code !== currentLang.value))

// referência do container para detectar clique fora
const langContainer = ref(null)

function toggleLangOpen() {
  langOpen.value = !langOpen.value
}

function changeLanguage(code) {
  locale.value = code
  langOpen.value = false
}

// fecha o dropdown ao clicar fora
function onDocClick(e) {
  if (!langContainer.value) return
  if (!langContainer.value.contains(e.target)) {
    langOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<style scoped>
/* pequenos ajustes visuais, se quiser */
</style>
