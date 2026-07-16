---
layout: doc
title: the Venomous Abyss
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

# 12.1團本: the Venomous Abyss
![thevenomousabyss]()

## 簡介

## 🗺️ 快速導覽
<div class="boss-selector-container">
  <div class="boss-buttons">
    <button 
      @click="selectedBoss = 'nekzalithesoulcoiler'" 
      :class="{ active: selectedBoss === 'nekzalithesoulcoiler' }"
      class="boss-btn"
    >
      1號首領: Nek'zali the Soulcoiler
    </button>
    <button 
      @click="selectedBoss = 'entombedsentinels'" 
      :class="{ active: selectedBoss === 'entombedsentinels' }"
      class="boss-btn"
    >
      2號首領: Entombed Sentinels
    </button>
    <button 
      @click="selectedBoss = 'vashnikthemalignant'" 
      :class="{ active: selectedBoss === 'vashnikthemalignant' }"
      class="boss-btn"
    >
      3號首領: Vashnik the Malignant
    </button>
    <button 
      @click="selectedBoss = 'thelostexplorers'" 
      :class="{ active: selectedBoss === 'thelostexplorers' }"
      class="boss-btn"
    >
      4號首領: The Lost Explorers
    </button>
    <button 
      @click="selectedBoss = 'sszorak'" 
      :class="{ active: selectedBoss === 'sszorak' }"
      class="boss-btn"
    >
      5號首領: Sszorak
    </button>
    <button 
      @click="selectedBoss = 'thetwinfangs'" 
      :class="{ active: selectedBoss === 'thetwinfangs' }"
      class="boss-btn"
    >
      6號首領: The Twin Fangs
    </button>
    <button 
      @click="selectedBoss = 'thecoiledaltar'" 
      :class="{ active: selectedBoss === 'thecoiledaltar' }"
      class="boss-btn"
    >
      7號首領: The Coiled Altar
    </button>
    <button 
      @click="selectedBoss = 'ulatek'" 
      :class="{ active: selectedBoss === 'ulatek' }"
      class="boss-btn"
    >
      8號首領: Ula'tek
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
