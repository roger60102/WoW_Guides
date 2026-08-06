---
layout: doc
---

<script setup>
import { ref } from 'vue'
import nekzalithesoulcoiler from './01_Nek\'zali_the_Soulcoiler.md'
import entombedsentinels from './02_Entombed_Sentinels.md'
import vashnikthemalignant from './03_Vashnik_the_Malignant.md'
import thelostexplorers from './04_The_Lost_Explorers.md'
import sszorak from './05_Sszorak.md'
import thetwinfangs from './06_The_Twin_Fangs.md'
import thecoiledaltar from './07_The_Coiled_Altar.md'
import ulatek from './08_Ula\'tek.md'

// 預設顯示首領，空值寫法: 
const selectedBoss = ref('')
</script>

# 12.1團本: 劇毒深淵
![thevenomousabyss](/images/thevenomousabyss.jpg)

位於**盤蛇島的阿塔烏特克寶庫**內，共三個位置可進入(座標: 43.3, 44.2、45.4, 65.9以及31.8, 64.9)，而團本入口則位於寶庫內北邊(座標: 47.2, 21.7)。
![thevenomousabyss](/images/thevenomousabyss2.jpg)

### 團本結構: 
共8個首領，一王後可選擇先前往二、三王或四、五王，之後匯聚再依序挑戰六、七以及尾王。

### 團隊搜尋器: 
- 第一區: 纏魂者(一王『**纏魂者**』**尼札利**與六王**雙生毒牙**)
- 第二區: 劇毒精華(二王**埋葬衛哨**與三王『**惡性之毒**』**伐許尼克**)
- 第三區: 巨蛇地穴(四王**迷路的探險者**與五王**司佐拉**)
- 第四區: 烏拉特克之墓(七王**盤牙祭壇**與尾王**烏拉特克**)

## 🗺️ 快速導覽
<div class="boss-selector-container">
  <div class="boss-buttons">
    <button 
      @click="selectedBoss = 'nekzalithesoulcoiler'" 
      :class="{ active: selectedBoss === 'nekzalithesoulcoiler' }"
      class="boss-btn"
    >
      1號首領: 『纏魂者』尼札利
    </button>
    <button 
      @click="selectedBoss = 'entombedsentinels'" 
      :class="{ active: selectedBoss === 'entombedsentinels' }"
      class="boss-btn"
    >
      2號首領: 埋葬衛哨
    </button>
    <button 
      @click="selectedBoss = 'vashnikthemalignant'" 
      :class="{ active: selectedBoss === 'vashnikthemalignant' }"
      class="boss-btn"
    >
      3號首領: 『惡性​之​​毒』​伐許尼克
    </button>
    <button 
      @click="selectedBoss = 'thelostexplorers'" 
      :class="{ active: selectedBoss === 'thelostexplorers' }"
      class="boss-btn"
    >
      4號首領: 迷路​的​​探險​者
    </button>
    <button 
      @click="selectedBoss = 'sszorak'" 
      :class="{ active: selectedBoss === 'sszorak' }"
      class="boss-btn"
    >
      5號首領: 司佐拉
    </button>
    <button 
      @click="selectedBoss = 'thetwinfangs'" 
      :class="{ active: selectedBoss === 'thetwinfangs' }"
      class="boss-btn"
    >
      6號首領: 雙生​​毒牙
    </button>
    <button 
      @click="selectedBoss = 'thecoiledaltar'" 
      :class="{ active: selectedBoss === 'thecoiledaltar' }"
      class="boss-btn"
    >
      7號首領: 盤蛇祭壇
    </button>
    <button 
      @click="selectedBoss = 'ulatek'" 
      :class="{ active: selectedBoss === 'ulatek' }"
      class="boss-btn"
    >
      8號首領: 烏拉特克
    </button>
  </div>
</div>

<div class="boss-guide-display" v-if="selectedBoss">
  
  <div v-if="selectedBoss === 'nekzalithesoulcoiler'">
    <nekzalithesoulcoiler />
  </div>

  <div v-if="selectedBoss === 'entombedsentinels'">
    <entombedsentinels />
  </div>

  <div v-if="selectedBoss === 'vashnikthemalignant'">
    <vashnikthemalignant />
  </div>

  <div v-if="selectedBoss === 'thelostexplorers'">
    <thelostexplorers />
  </div>

  <div v-if="selectedBoss === 'sszorak'">
    <sszorak />
  </div>

  <div v-if="selectedBoss === 'thetwinfangs'">
    <thetwinfangs />
  </div>

  <div v-if="selectedBoss === 'thecoiledaltar'">
    <thecoiledaltar />
  </div>

  <div v-if="selectedBoss === 'ulatek'">
    <ulatek />
  </div>

</div>

<div class="boss-placeholder" v-else>
  <p>💡 點擊按鈕選擇首領，即刻載入首領筆記。</p>
</div>

## 資料參考
- [Wowhead](https://www.wowhead.com/)
