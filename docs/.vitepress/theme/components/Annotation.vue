<template>
  <span class="annotation-wrapper">
    <span class="trigger-text" @click="toggle"><slot></slot></span>
    
    <div v-if="isOpen" class="popover-content markdown-body">
      <!-- 動態渲染引入的.md檔 -->
      <component :is="mdContent" />
    </div>
  </span>
</template>

<script setup>
import { ref, shallowRef, watchEffect } from 'vue'

const props = defineProps({
  file: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const mdContent = shallowRef(null)
const toggle = () => isOpen.value = !isOpen.value

// 動態載入另一個.md檔當作組件
watchEffect(async () => {
  try {
    // 註解用的.md檔放/docs/annotations/
    const mod = await import(`../../../annotations/${props.file}.md`)
    mdContent.value = mod.default
  } catch (e) {
    console.error('找不到註解檔案:', e)
  }
})
</script>

<style scoped>
.annotation-wrapper {
  position: relative;
  display: inline-block;
}
.trigger-text {
  text-decoration: underline dotted #3eaf7c;
  cursor: pointer;
  color: #3eaf7c;
}
.popover-content {
  position: absolute; /* 若為fixed可使其基於螢幕視窗做邊界計算 */
  bottom: 120%;
  top: auto; /* 讓定位中心點隨游標調整，並自動被安全區塊限制 */
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  box-shadow: var(--vp-shadow-3);
  padding: 10px 14px;
  border-radius: 6px;
  z-index: 100;
  width: max-content;       /* 如果字少使寬度會剛好包住文字，不會直接變最大寬度 */
  max-width: min(320px, 85vw);         /* 限制最大寬度，最多不超過螢幕寬度減去左右留白 */
  white-space: normal;      /* 允許正常換行 */
  word-break: break-all;    /* 防止連續英文或網址把框框撐破，強制英文字元也能適當換行 */
  
  /* 避免離螢幕邊緣太近 */
  margin-left: auto;
  margin-right: auto;
}
/* 清除彈出框內md預設的過大邊距 */
.popover-content :deep(p) {
  margin: 0 0 8px 0;
  font-size: 14px;
  line-height: 1.5;
}
.popover-content :deep(p:last-child) {
  margin-bottom: 0;
}
.popover-content :deep(ul), .popover-content :deep(ol) {
  margin: 4px 0;
  padding-left: 20px;
  font-size: 14px;
}
</style>
