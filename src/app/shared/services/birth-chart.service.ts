import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrow } from '../models/arrow.model';
import { ChartNumber } from '../models/chart-number.model';

@Injectable({
  providedIn: 'root'
})
export class BirthChartService {
  arrows: Arrow[] = [];
  chartNumbers: ChartNumber[] = [];

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  getArrow(name: string) {
    return this._httpClient.get<Arrow>("api/arrow/" + name);
  }

  getChartNumber(number: number) {
    return this._httpClient.get<ChartNumber>("api/chart-number/" + number);
  }

  storeChartNumber(number: ChartNumber) {
    if (!this.chartNumbers.length || !this.chartNumbers.filter(cN => cN.number === number.number).length) {
      this.chartNumbers.push(number);
    }
  }

  storeArrow(arrow: Arrow) {
    if (!this.arrows.filter(ar => ar.name === arrow.name).length) {
      this.arrows.push(arrow);
    }
  }
}
