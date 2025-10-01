// src/i18n.js
import { createI18n } from 'vue-i18n'

/**
 * Função para criar objetos aninhados a partir de um caminho em string.
 * Exemplo: path = "home/hero", value = { title: "..." }
 * resultará em obj.home.hero = value
 */
function setNested(obj, path, value) {
  const keys = path.split('/')
  let current = obj
  keys.forEach((k, i) => {
    if (i === keys.length - 1) {
      current[k] = value
    } else {
      current[k] = current[k] || {}
      current = current[k]
    }
  })
}

function loadLocaleMessages() {
  // Carrega todos os JSON dentro de src/locales/** com importação estática
  const modules = import.meta.glob('./locales/**/*.json', { eager: true })
  const messages = {}

  for (const path in modules) {
    // path exemplo: ./locales/pt/home/hero.json
    const matched = path.match(/\.\/locales\/([^\/]+)\/(.+)\.json$/)
    if (!matched) continue
    const locale = matched[1]         // 'pt', 'en', 'es'
    const namespace = matched[2]      // 'home/hero' ou 'about'
    const content = modules[path].default ?? modules[path]

    messages[locale] = messages[locale] || {}
    setNested(messages[locale], namespace, content)
  }

  return messages
}

export default createI18n({
  legacy: false,          // permite usar Composition API (com $t direto)
  locale: 'en',           // idioma padrão inicial
  fallbackLocale: 'en',   // idioma fallback
  messages: loadLocaleMessages()
})
