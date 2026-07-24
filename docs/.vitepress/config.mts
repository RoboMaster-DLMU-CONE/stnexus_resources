import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

const repositoryUrl = 'https://github.com/RoboMaster-DLMU-CONE/stnexus_resources'

const teekConfig = defineTeekConfig({
  // Keep VitePress's product-documentation home while using Teek in articles.
  teekHome: false,
  vpHome: true,
  sidebarTrigger: true,
  footerInfo: {
    theme: { show: false },
    copyright: {
      show: true,
      createYear: 2026,
      name: 'DLMU C·ONE 创一工作室',
      link: repositoryUrl,
    },
  },
})
export default defineConfig({
  extends: teekConfig,
  lang: 'zh-CN',
  title: '星创矩阵 Wiki',
  titleTemplate: ':title | 星创矩阵 Wiki',
  description: 'Stellaris-Nexus 开发板硬件手册、嵌入式实验教程与新生培训文档',
  lastUpdated: true,
  // The production host serves the generated dist directory as static files.
  // Keep the .html suffix so direct navigation works without an Nginx rewrite.
  cleanUrls: false,
  head: [
    ['meta', { name: 'theme-color', content: '#16755b' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    siteTitle: '星创矩阵 Wiki',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started/' },
      { text: '硬件手册', link: '/hardware/' },
      { text: '实验教程', link: '/software/' },
      { text: 'GitHub', link: repositoryUrl },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: '快速开始',
          items: [
            { text: '认识星创矩阵', link: '/getting-started/' },
            { text: '开发环境', link: '/getting-started/environment' },
            { text: '首次下载程序', link: '/getting-started/first-program' },
            { text: '新生训练路线', link: '/getting-started/training-roadmap' },
          ],
        },
      ],
      '/hardware/': [
        {
          text: '硬件总览',
          items: [
            { text: '开发板概览', link: '/hardware/' },
            { text: '引脚速查', link: '/hardware/pinout' },
            { text: '供电与安全', link: '/hardware/safety' },
          ],
        },
        {
          text: '核心与接口',
          items: [
            { text: '最小系统', link: '/hardware/minimum-system' },
            { text: '板载 Link', link: '/hardware/onboard-link' },
            { text: 'LED、按键与 ADC', link: '/hardware/io' },
            { text: '通信接口', link: '/hardware/communication' },
            { text: 'PWM 与执行器', link: '/hardware/pwm-output' },
            { text: '传感器与显示', link: '/hardware/sensors-display' },
            { text: '继电器与扩展', link: '/hardware/relay-expansion' },
          ],
        },
      ],
      '/software/': [
        {
          text: '实验导航',
          items: [
            { text: '软件实验总览', link: '/software/' },
          ],
        },
        {
          text: '基础外设',
          items: [
            { text: '01 GPIO LED', link: '/software/gpio-led' },
            { text: '02 GPIO 按键', link: '/software/gpio-key' },
            { text: '03 ADC 电压采样', link: '/software/adc-voltage' },
            { text: '04 PWM LED', link: '/software/pwm-led' },
            { text: '05 PWM 蜂鸣器', link: '/software/pwm-buzzer' },
          ],
        },
        {
          text: '传感器与显示',
          items: [
            { text: '06 I²C AHT20', link: '/software/i2c-aht20' },
            { text: '07 I²C OLED', link: '/software/i2c-oled' },
            { text: '08 SPI BMI270', link: '/software/spi-bmi270' },
          ],
        },
        {
          text: '系统与控制',
          items: [
            { text: '09 FreeRTOS LED', link: '/software/freertos-led' },
            { text: '10 FreeRTOS 工程框架', link: '/software/freertos-framework' },
            { text: '11 CAN M3508', link: '/software/can-m3508' },
            { text: '12 WS2812', link: '/software/ws2812' },
          ],
        },
      ],
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    editLink: {
      pattern: `${repositoryUrl}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    socialLinks: [{ icon: 'github', link: repositoryUrl }],
  },
  // The SSL renewal challenge lives under dist/.well-known and must survive builds.
  vite: {
    build: {
      emptyOutDir: false,
    },
  },
})
