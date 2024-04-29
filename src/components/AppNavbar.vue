<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const emit = defineEmits<{
  (e: 'handleAdd'): void
  (e: 'handleSave'): void
  (e: 'handleUpdate'): void
}>()

const props = defineProps<{
  apiLoading: boolean,
}>()

const handleAdd = () => {
  if (props.apiLoading) return
  emit('handleAdd')
}
const handleSave = () => {
  if (props.apiLoading) return
  emit('handleSave')
}
const handleUpdate = () => {
  if (props.apiLoading) return
  emit('handleUpdate')
}
</script>

<template>
  <div :class="['app-navbar', { 'loading': apiLoading}]">
    <BaseButton :color="'primary'" @click="handleAdd">Add</BaseButton>
    <BaseButton :color="'success'" @click="handleSave">Save</BaseButton>
    <BaseButton :color="'danger'" @click="handleUpdate">Update</BaseButton>
  </div>
</template>
  
<style scoped lang="scss">
.app-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  &.loading :deep(.base-button) {
    opacity: 0.7;
    cursor: wait;
  }
}
</style>
