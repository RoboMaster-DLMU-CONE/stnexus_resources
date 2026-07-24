import Teek from 'vitepress-theme-teek'
import 'vitepress-theme-teek/index.css'
import './custom.css'
import { inBrowser } from 'vitepress'

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> }
}

const toggleAppearanceWithFade = (appearanceButton: HTMLButtonElement | null) => {
  if (!appearanceButton) return

  const root = document.documentElement
  const updateTheme = () => appearanceButton.click()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const startViewTransition = (document as ViewTransitionDocument).startViewTransition

  if (reducedMotion) {
    updateTheme()
    return
  }

  root.classList.add('stnexus-theme-fade')
  if (startViewTransition) {
    const transition = startViewTransition.call(document, updateTheme)
    transition.finished.finally(() => root.classList.remove('stnexus-theme-fade'))
    return
  }

  root.classList.add('stnexus-theme-fade-fallback')
  requestAnimationFrame(() => {
    updateTheme()
    window.setTimeout(() => {
      root.classList.remove('stnexus-theme-fade', 'stnexus-theme-fade-fallback')
    }, 260)
  })
}

const mountDayNightToggle = () => {
  const contentBody = document.querySelector('.VPNavBar .content-body')
  if (!contentBody || contentBody.querySelector('.stnexus-day-night-toggle')) return

  const appearanceButton = document.querySelector<HTMLButtonElement>('.VPNavBar .VPSwitchAppearance')
  const isDark = document.documentElement.classList.contains('dark')
  const toggle = document.createElement('toggle-button')
  toggle.className = 'stnexus-day-night-toggle'
  toggle.setAttribute('value', isDark ? 'dark' : 'light')
  toggle.setAttribute('size', '1')
  toggle.setAttribute('title', isDark ? '切换到浅色模式' : '切换到深色模式')
  toggle.setAttribute('aria-label', isDark ? '切换到浅色模式' : '切换到深色模式')
  toggle.addEventListener('change', (event) => {
    const requestedDark = (event as CustomEvent<'light' | 'dark'>).detail === 'dark'
    const currentDark = document.documentElement.classList.contains('dark')
    const nextTitle = requestedDark ? '切换到浅色模式' : '切换到深色模式'
    toggle.setAttribute('title', nextTitle)
    toggle.setAttribute('aria-label', nextTitle)
    if (requestedDark !== currentDark) toggleAppearanceWithFade(appearanceButton)
  })

  const hamburger = contentBody.querySelector('.hamburger')
  contentBody.insertBefore(toggle, hamburger || null)
}

const mountFooterBadges = () => {
  const footer = document.querySelector('.tk-footer-info')
  const list = footer?.querySelector('.tk-footer-info__list')
  if (!footer || !list || footer.querySelector('.stnexus-footer-badges')) return

  const badges = [
    {
      src: 'https://img.shields.io/github/actions/workflow/status/RoboMaster-DLMU-CONE/stnexus_resources/deploy.yml?branch=main&style=flat-square&label=deploy',
      alt: '部署状态',
    },
    {
      src: 'https://img.shields.io/github/last-commit/RoboMaster-DLMU-CONE/stnexus_resources?style=flat-square&label=updated',
      alt: '最后提交时间',
    },
    {
      src: 'https://img.shields.io/github/license/RoboMaster-DLMU-CONE/stnexus_resources?style=flat-square',
      alt: '许可证',
    },
    {
      src: 'https://img.shields.io/github/stars/RoboMaster-DLMU-CONE/stnexus_resources?style=flat-square&label=stars',
      alt: 'GitHub stars',
    },
  ]
  const container = document.createElement('div')
  container.className = 'stnexus-footer-badges'
  container.setAttribute('aria-label', 'GitHub 项目状态')
  badges.forEach(({ src, alt }) => {
    const link = document.createElement('a')
    link.href = 'https://github.com/RoboMaster-DLMU-CONE/stnexus_resources'
    link.target = '_blank'
    link.rel = 'noreferrer'
    const image = document.createElement('img')
    image.src = src
    image.alt = alt
    image.loading = 'lazy'
    link.append(image)
    container.append(link)
  })
  footer.insertBefore(container, list)
}

const mountFooterMeta = () => {
  const footer = document.querySelector('.tk-footer-info')
  if (!footer || footer.querySelector('.stnexus-footer-meta')) return

  const meta = document.createElement('p')
  meta.className = 'stnexus-footer-meta'
  const maintainer = document.createElement('span')
  maintainer.innerHTML = '维护者 <strong>TuxMonkey</strong>'
  const buildTime = document.createElement('span')
  buildTime.textContent = `构建时间 ${new Intl.DateTimeFormat('zh-CN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Shanghai',
  }).format(new Date())}`
  const link = document.createElement('a')
  link.href = 'https://github.com/RoboMaster-DLMU-CONE/stnexus_resources'
  link.target = '_blank'
  link.rel = 'noreferrer'
  link.textContent = '在 GitHub 查看项目状态'
  meta.append(maintainer, buildTime, link)
  footer.append(meta)
}

export default {
  ...Teek,
  async enhanceApp(context: Parameters<NonNullable<typeof Teek.enhanceApp>>[0]) {
    await Teek.enhanceApp?.(context)
    if (!inBrowser) return

    const { default: DayNightToggleButton } = await import('./vendor/day-night-toggle.js')
    const waitForPage = () => {
      const appRoot = document.querySelector('#app') as (HTMLElement & { __vue_app__?: unknown }) | null
      if (!appRoot?.__vue_app__) {
        requestAnimationFrame(waitForPage)
        return
      }
      mountDayNightToggle()
      mountFooterBadges()
      mountFooterMeta()
      const toggle = document.querySelector('.stnexus-day-night-toggle')
      if (toggle && document.querySelector('.stnexus-footer-meta')) {
        if (!customElements.get('toggle-button')) customElements.define('toggle-button', DayNightToggleButton)
      } else {
        requestAnimationFrame(waitForPage)
      }
    }
    requestAnimationFrame(waitForPage)
  },
}
