import { defineConfig } from 'vitepress'
import { githubSlugify } from '../../scripts/slugify.mjs'

export default defineConfig({
  title: 'AI 工作坊',
  description: '用中文對話請 AI Agent 幫你做網頁、產生 Office 文件、整理公報、辨識憑證、整理會議紀錄',
  head: [
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
  ],
  base: '/ai-workshop/',
  ignoreDeadLinks: true,
  markdown: {
    anchor: { slugify: githubSlugify },
  },
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '課程總覽', link: '/guide/00_overview' },
      {
        text: '六個單元',
        items: [
          { text: '01. Antigravity 入門', link: '/guide/01_antigravity' },
          { text: '02. 前端設計 skill', link: '/guide/02_frontend_design' },
          { text: '03. Office 文件處理', link: '/guide/03_office_skills' },
          { text: '04. 立法院公報整理', link: '/guide/04_legislative_gazette' },
          { text: '05. 核銷憑證辨識', link: '/guide/05_voucher_ocr' },
          { text: '06. 會議錄音轉紀錄', link: '/guide/06_meeting_assistant' },
        ],
      },
    ],
    sidebar: [
      {
        text: '課程介紹',
        items: [{ text: '課程總覽與單元列表', link: '/guide/00_overview' }],
      },
      {
        text: '六個單元',
        items: [
          { text: '01. Antigravity 入門', link: '/guide/01_antigravity' },
          { text: '02. 前端設計 skill', link: '/guide/02_frontend_design' },
          { text: '03. Office 文件處理', link: '/guide/03_office_skills' },
          { text: '04. 立法院公報整理', link: '/guide/04_legislative_gazette' },
          { text: '05. 核銷憑證辨識', link: '/guide/05_voucher_ocr' },
          { text: '06. 會議錄音轉紀錄', link: '/guide/06_meeting_assistant' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/gemini960114/ai-workshop' }],
    footer: {
      message: '用中文對話請 AI Agent 完成網頁、文件、資料整理與語音紀錄',
      copyright: 'Copyright © 2026 AI 工作坊',
    },
  },
})
