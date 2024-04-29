<script setup lang="ts">
const props = defineProps<{
  color?: string
}>()
</script>

<template>
  <div :class="['base-button', `${props.color}`]">
    <slot></slot>
  </div>
</template>
  
<style scoped lang="scss">
.base-button {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  color: #fff;
  background-color: var(--btn-primary);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: .25rem;
  border: none;
  outline: none;
  &:hover {
    filter: brightness(110%);
  }
  &.primary {
    background-color: var(--btn-primary);
  }
  &.success {
    background-color: var(--btn-success);
  }
  &.danger {
    background-color: var(--btn-danger);
  }
}
</style>
