import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      // Old README section links referred to the paper catalog.
      if (/\/README(?:\.html)?$/.test(location.pathname) && location.hash) {
        location.replace(location.pathname.replace(/README(?:\.html)?$/, 'reading/index.html') + location.hash)
      }
    })
  },
  enhanceApp({ app }) {
    app.component('MermaidDiagram', MermaidDiagram)
  },
} satisfies Theme
