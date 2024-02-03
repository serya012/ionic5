// shared.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedOptions: any[] = [];

  addOption(option: any) {
    this.selectedOptions.push(option);
  }

  addOptions(options: any[]) {
    this.selectedOptions.push(...options);
  }

  getOptions() {
    return this.selectedOptions;
  }
}
