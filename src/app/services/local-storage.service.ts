import { Injectable } from '@angular/core';
import { Aggregato } from '../models/aggregato';

@Injectable()
export class LocalStorageService {
  constructor() { }
  setValueToLocalStorage(key: string, data: Object) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getValueToLocalStorage(key: string): Object {
    return JSON.parse(localStorage.getItem(key));
  }
}
