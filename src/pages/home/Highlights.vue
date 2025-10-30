<template>
  <!-- Highlights section: logo abaixo da Hero.
       Comentários no código ajudam a localizar onde comentar/remover blocos -->
  <section class="py-12" :class="inheritHeroBg ? 'bg-transparent' : 'bg-white'">
    <!-- Título vindo do i18n padrão (já funcionando no seu projeto) -->
    <h2 class="text-center font-bold text-3xl mb-8">
      {{ $t('home.highlights.sectionTitle') }}
    </h2>

    <!-- GRID de cards (mobile-first, compacto) -->
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <!-- v-for sobre `itemsToShow` (array já pronto) -->
        <article
          v-for="item in itemsToShow"
          :key="item.id ?? item.title"
          class="bg-white/80 dark:bg-gray-900/60 border rounded-2xl p-4 shadow-sm"
        >
          <!-- TITULO (se vazio, não renderiza) -->
          <h3 v-if="item.title" class="text-lg font-semibold text-green-700 mb-2">
            {{ item.title }}
          </h3>

          <!-- RESUMO / SUMMARY -->
          <p v-if="item.summary" class="text-sm text-gray-600 mb-3">
            {{ item.summary }}
          </p>

          <!-- Se não houver title nem summary, mostramos fallback curto (opcional) -->
          <p v-else class="text-sm text-gray-500 italic mb-3">Sem descrição</p>

          <!-- Link "Ler mais" (texto via i18n para manter tradução) -->
          <div>
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener"
              class="text-sm font-medium text-green-600 hover:text-green-800"
            >
              {{ $t('home.highlights.readMore') }}
            </a>
          </div>
        </article>
      </div>

      <!-- controles de desenvolvimento -->
      <div class="text-center mt-8">
        <!-- Botão para ver página de notícias -->
        <router-link
          to="/news"
          class="inline-block px-5 py-2 bg-green-600 text-white rounded-full shadow"
        >
          {{ $t('home.highlights.seeMore') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Imports estáticos (mantém sua estrutura src/locales)
import ptHighlights from '../../locales/pt/home/highlights.json'
import enHighlights from '../../locales/en/home/highlights.json'
import esHighlights from '../../locales/es/home/highlights.json'


import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

/*
  Configuração simples:
  - Suporta dois formatos de JSON:
    (A) arquivo como array: [ { id, title, summary, link }, ... ]
    (B) arquivo como objeto: { sectionTitle, readMore, items: [ ... ] }
  - itemsNormalized sempre será um array pronto para iterar.
*/
const itemsNormalized = computed(() => {
  const loc = locale.value || 'pt'

  // seleciona o arquivo correto
  let raw = enHighlights // fallback
  if (loc.startsWith('pt')) raw = ptHighlights
  else if (loc.startsWith('es')) raw = esHighlights
  else raw = enHighlights

  // se o JSON for um array (formato A), usa-o diretamente
  if (Array.isArray(raw)) return raw

  // se for objeto com `items` (formato B)
  if (raw && Array.isArray(raw.items)) return raw.items

  // defensivo: tentar encontrar a primeira propriedade que seja array
  for (const k in raw) {
    if (Array.isArray(raw[k])) return raw[k]
  }

  // fallback para array vazio
  return []
})

/* ---------- Opções de comportamento ---------- */
// Quantos itens mostrar na home por padrão (aumente/diminua enquanto desenvolve)
const DEFAULT_SHOW = 3

// itemsToShow: slice do array para controlar tamanho visual
const itemsToShow = computed(() => itemsNormalized.value.slice(0, DEFAULT_SHOW))

// Se quiser que a seção "herde" visualmente o fundo da Hero,
// ative essa flag: ela deixa o fundo transparente.
// Você pode também controlar via classes CSS externas.
const inheritHeroBg = true
</script>

<style scoped>
/* Comentários e dicas:
   - Use este arquivo para ajustes rápidos de espaçamento.
   - Para mudar background geral, prefira editar o Hero.vue ou a Home.vue wrapper.
*/

/* exemplo: reduzir altura dos cards em telas grandes */
@media (min-width: 1024px) {
  article {
    min-height: 10rem;
  }
}
</style>
