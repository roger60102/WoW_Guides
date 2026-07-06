import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "魔獸世界筆記",
  description: "職業與首領戰筆記",

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危險',
      infoLabel: '訊息',
      detailsLabel: '優化細節'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '職業',
        items: [
          { text: '暴徒盜賊', link: '/WoW/classes/Outlaw_Rogue.md' },
          { text: '冰霜死亡騎士', link: '/api-examples' }
        ]
      },
      {
        text: '探究',
        items: [
          { text: 'Azta\'rec', link: '' }
        ]
      },
      {
        text: 'M+',
        items: [
          { text: '兇殺路', link: '' },
          { text: '納羅拉克洞穴', link: '' },
          { text: '盲目谷地', link: '' },
          { text: '虛空之痕競技場', link: '' },
          { text: '毒牙祭壇', link: '' },
          { text: '諸王之眠', link: '' },
          { text: '瑟沙利斯神廟', link: '' },
          { text: '晶紅生命之池', link: '' }
        ]
      },
      {
        text: '團本',
        items: [
          { text: 'the Venomous Abyss', link: '' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
