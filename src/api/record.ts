import api from '../libs/axios';
import type { EmployeeData } from '@/types/model.ts';

export function getRecords() {
  return api.get('/api/Record/GetRecords');
}

export function saveRecords(params: EmployeeData[]) {
  return api.post("/api/Record/SaveRecords", params);
}
