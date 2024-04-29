# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

問一下 event 的 type

1. 如果欄位沒有填完全，前端這邊需要做什麼處理嗎？例如 Name、Birthday 等欄位為空或是 Birthday 格式錯誤？需要有什麼提示或呈現嗎？還是直接讓後端擋下就好？錯誤（如 400）需要做什麼提示？
2. Birthday 旁邊的 icon 點及下去是有作用的嗎？有預期使用者是直接 key-in 輸入 Birthday 還是如何處理？Birthday 傳給後端的格式有規定嗎？
3. 薪資是用條狀拉動，需要有數字呈現嗎？如何呈現？