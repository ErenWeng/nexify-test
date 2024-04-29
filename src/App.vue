<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AppTable from '@/components/AppTable.vue';
import type { EmployeeData } from '@/types/model.ts';
import { getRecords, saveRecords } from '@/api/record.ts';

const tableBody = reactive<EmployeeData[]>([])

const initEmployee = (id?: number): EmployeeData => ({
  Name: '',
  DateOfBirth: '',
  Salary: 0,
  Address: '',
  Id: id || 0,
})

const apiLoading = ref<boolean>(false)
const tableBodyLoading = ref<boolean>(false)

const handleAdd = () => {
  tableBody.unshift(initEmployee(tableBody.length))
}
const handleSave = () => {
  apiLoading.value = true
  let params: EmployeeData[];
  params = tableBody.map(({ Id, ...rest }) => rest)
  saveRecords(params).then(res => {
    if (res.status === 200 && res.data.Success) {
      alert('儲存成功')
    } else {
      throw new Error('/api/Record/SaveRecords')
    }
  }).catch(err => {
    console.log(err)
    alert(err.message)
  }).finally(() => {
    apiLoading.value = false
  })
}

const handleUpdate = () => {
  apiLoading.value = true
  tableBodyLoading.value = true
  getRecords().then(res => {
    if (res.status === 200 && res.data.Success) {
      if (res.data.Data.length <= 0) return
      const data = [];
      for(let i = res.data.Data.length - 1; i >= 0; i--) {
        data.push({ ...res.data.Data[i], Id: i })
      }
      // const data = res.data.Data.map((item: EmployeeData, i: number) => {
      //   return { ...item, Id: i }
      // })
      tableBody.length = 0
      tableBody.push(...data)
    } else {
      throw new Error('/api/Record/GetRecords:')
    }
  }).catch(err => {
    console.log(err)
    alert(err.message)
  }).finally(() => {
    apiLoading.value = false
    tableBodyLoading.value = false
  })
}

onMounted(() => {
  handleUpdate()
})
</script>

<template>
  <div class="app">
    <div class="container">
      <nav>
        <AppNavbar 
          :apiLoading="apiLoading"
          @handleAdd="handleAdd"
          @handleSave="handleSave"
          @handleUpdate="handleUpdate"
        />
      </nav>
      <AppTable :tableBody="tableBody" :tableBodyLoading="tableBodyLoading" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .container {
    height: 100%;
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-flow: column;
  }
}
</style>
