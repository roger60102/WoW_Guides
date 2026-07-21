import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/WoW_Guides/',
  title: "魔獸世界筆記",
  description: "職業與首領戰筆記",

  markdown: {
    container: {
      tipLabel: '提醒',
      warningLabel: '注意',
      dangerLabel: '致命',
      infoLabel: '資訊',
      detailsLabel: '優化細節'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記', link: '/WoW/index.md' }
    ],

    sidebar: [
      {
        text: '探究',
        items: [
          { text: '12.0(S1) 努萊厄斯', link: '/WoW/Delves/Nullaeus.md' },
          { text: '12.1(S2) 阿茲塔瑞', link: '/WoW/Delves/Azta\'rec.md' }
        ]
      },
      {
        text: 'M+',
        items: [
          { text: '兇殺路', link: '/WoW/mplus/Murder_Row.md' },
          { text: '納羅拉克之穴', link: '/WoW/mplus/Den_of_Nalorakk.md' },
          { text: '盲目谷地', link: '/WoW/mplus/The_Blinding_Vale.md' },
          { text: '虛痕競技場', link: '/WoW/mplus/Voidscar_Arena.md' },
          { text: '毒牙祭壇', link: '/WoW/mplus/Altar_of_Fangs.md' },
          { text: '諸王之眠', link: '/WoW/mplus/Kings\'_Rest.md' },
          { text: '瑟沙利斯神廟', link: '/WoW/mplus/Temple_of_Sethraliss.md' },
          { text: '晶紅生命之池', link: '/WoW/mplus/Ruby_Life_Pools.md' }
        ]
      },
      {
        text: '團本',
        items: [
          { text: 'the Venomous Abyss', link: '/WoW/raids/the_Venomous_Abyss/index.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/roger60102/WoW_Guides' }
    ]
  }
})
