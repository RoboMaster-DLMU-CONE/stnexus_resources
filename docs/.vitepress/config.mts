import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

const teekConfig = defineTeekConfig({
  // Keep the existing VitePress home page while enabling Teek's document layout.
  teekHome: false,
  vpHome: true,
  sidebarTrigger: true,
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "Stellaris-Nexus Wiki",
  description: "A Wiki for STNexus Dev Board",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RoboMaster-DLMU-CONE/stnexus_resources' }
    ]
  }
})
