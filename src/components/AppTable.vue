<script setup lang="ts">
import { reactive } from 'vue';
import type { EmployeeData } from '@/types/model.ts';

defineProps<{
  tableBody: EmployeeData[],
  tableBodyLoading: boolean,
}>()

const tableHeader = reactive<string[]>(['Name', 'Birthday', 'Salary', 'Address'])

const dateFormat = (time: string) => {
  if (!time) return

  const t = new Date(time)
  const year = t.getFullYear()
  const month = t.getMonth() + 1
  const day = t.getDate()

  return `${year}/${month}/${day}`
}

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}

const dateTransform = (e: { target: HTMLInputElement }, Id: number) => {
  console.log(e.target.value, Id)
}
</script>

<template>
  <div class="app-table">
    <div class="table-header">
      <span 
        v-for="title in tableHeader"
        :key="title"
        class="cell"
      >
        {{ title }}
      </span>
    </div>
    <div v-if="tableBodyLoading">
      loading
    </div>
    <div v-else-if="tableBody.length <= 0">
      no data
    </div>
    <div v-else class="table-body">
      <div 
        v-for="employee in tableBody"
        :key="employee.Id"
        class="tr"
      >
        <div class="cell td">
          <input type="text" v-model="employee.Name">
        </div>
        <div class="cell td with-right-icon">
          <input type="text" :value="dateFormat(employee.DateOfBirth)" @input="dateTransform($event, employee.Id)">
          <span class="input-icon">
            <img src="@/assets/calendar.svg" />
          </span>
        </div>
        <div class="cell td">
          <input 
            type="range" 
            min="0" 
            max="100000"
            v-model="employee.Salary"
          />

          {{ employee.Salary }}
        </div>
        <div class="cell td">
          <input type="text" v-model="employee.Address" >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-table {
  flex: 1;
  overflow: auto;
  .table-header {
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
    font-weight: 500;
    display: flex;
  }
  .table-body {
    .tr {
      display: flex;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
    }
  }
  .cell {
    padding: 0.5rem;
    flex: 1;
    position: relative;
    min-width: 10rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    input {
      width: 10rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.with-right-icon {
      input {
        padding-right: 1.5rem;
      }
    }
    .input-icon {
      position: absolute;
      top: 50%;
      left: 9rem;
      transform: translate(0, -50%);
      height: 1.5rem;
      width: 1.5rem;
      display: grid;
      place-items: center;
    }
  }
}
</style>
