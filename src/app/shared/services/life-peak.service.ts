import { Injectable } from '@angular/core';
import { LifePeak } from '../models/life-peak.model';

@Injectable({
  providedIn: 'root'
})
export class LifePeakService {

  constructor() {

  }

  constructLifePeaks(dayString, monthString, yearString, rulingNumber: number) {
    let lifePeaks: LifePeak[] = [];
    let baseDay = this._calculateBaseNumber(dayString);
    let baseMonth = this._calculateBaseNumber(monthString);
    let baseYear = this._calculateBaseNumber(yearString);

    lifePeaks.push(new LifePeak({
      number: this._reCalc(baseDay + baseMonth, 9),
      age: 36 - rulingNumber,
      descriptions: []
    }));

    lifePeaks.push(new LifePeak({
      number: this._reCalc(baseDay + baseYear, 9),
      age: lifePeaks[0].age + 9,
      descriptions: []
    }));

    lifePeaks.push(new LifePeak({
      number: this._reCalc(lifePeaks[0].number + lifePeaks[1].number, 11),
      age: lifePeaks[1].age + 9,
      descriptions: []
    }));

    lifePeaks.push(new LifePeak({
      number: this._reCalc(baseYear + baseMonth, 11),
      age: lifePeaks[2].age + 9,
      descriptions: []
    }));

    return lifePeaks;
  }

  _reCalc(_x, max) {
    if (_x <= max) {
      return _x;
    }
    _x = (Math.floor(_x / 10) + _x % 10);
    return this._reCalc(_x, max);
  }

  _calculateBaseNumber(numberString) {
    let baseNumber = 0;

    for (let index = 0; index < numberString.length; index++) {
      baseNumber += (numberString.charCodeAt(index) - 48);
    }

    return this._reCalc(baseNumber, 9);
  }
}
