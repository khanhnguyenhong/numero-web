import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCalculationService {
  hasValue: boolean;

  constructor() { 
    this.hasValue = false;
  }
}
