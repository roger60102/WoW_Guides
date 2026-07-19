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
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  box-shadow: var(--vp-shadow-3);
  padding: 8px 12px;
  border-radius: 4px;
  z-index: 100;
  width: max-content;       /* 如果字少使寬度會剛好包住文字，不會直接變最大寬度 */
  max-width: 280px;         /* 限制最大寬度 */
  white-space: normal;      /* 允許正常換行 */
  word-break: break-all;    /* 防止連續英文或網址把框框撐破，強制英文字元也能適當換行 */
}
</style>
